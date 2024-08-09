import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSupabase } from "@/context/supabaseAuthContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
});

const Ingresar = () => {
  const { signInWithPassword, session } = useSupabase();
  const router = useRouter();


  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {

          try {
            const res = await signInWithPassword(values.email, values.password);
            // router.replace("/bodega");
          } catch (error) {
            setErrors({ password: "Correo o contraseña incorrectos" });
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
              <Text style={{ color: "red" }}>{errors.email}</Text>
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
              <Text style={{ color: "red" }}>{errors.password}</Text>
            ) : null}

            <Button
              onPress={handleSubmit as any}
              title={isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
              disabled={isSubmitting}
            />

            <TouchableOpacity
              onPress={() => router.push("/registrarse")}
              style={{ marginTop: 10 }}
            >
              <Text style={{ color: "blue", textAlign: "center" }}>
                ¿No tienes una cuenta? Regístrate aquí
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Ingresar