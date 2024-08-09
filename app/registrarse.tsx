import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSupabase } from "@/context/supabaseAuthContext";
import { useRouter } from "expo-router";
import { styles } from "@/constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Debes confirmar la contraseña"),
});

const Registrarse = () => {
  const { signUp } = useSupabase();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await signUp(values.email, values.password);
            router.replace("/bodega"); // Redirigir a /bodega después del registro exitoso
          } catch (error) {
            setErrors({ email: "No se pudo registrar. Inténtalo de nuevo." });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              placeholder="Correo"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={{
                borderColor: errors.email && touched.email ? "red" : "#ccc",
                borderWidth: 1,
                padding: 10,
                marginBottom: 5,
              }}
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}

            <TextInput
              placeholder="Contraseña"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={{
                borderColor: errors.password && touched.password ? "red" : "#ccc",
                borderWidth: 1,
                padding: 10,
                marginBottom: 5,
              }}
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}

            <TextInput
              placeholder="Confirmar Contraseña"
              secureTextEntry
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              style={{
                borderColor:
                  errors.confirmPassword && touched.confirmPassword ? "red" : "#ccc",
                borderWidth: 1,
                padding: 10,
                marginBottom: 5,
              }}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}

            <Button
              onPress={handleSubmit as any}
              title={isSubmitting ? "Registrando..." : "Registrarse"}
              disabled={isSubmitting}
            />

            <TouchableOpacity
              onPress={() => router.push("/ingresar")}
              style={{ marginTop: 10 }}
            >
              <Text style={styles.linkText}>
                ¿Ya tienes una cuenta? Inicia sesión aquí
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Registrarse;
