import { useState, useEffect } from "react";
import { View, Button, SafeAreaView, ScrollView } from "react-native";
import { Formik, FormikHelpers } from "formik";
import { semillaValidationSchema } from "@/constants/validations/semillaSchema";
import TextInputField from "@/components/Forms/TextInputField";
import DatePickerField from "@/components/Forms/DatePickerField";
import PickerField from "@/components/Forms/PickerField";
import { styles } from "@/constants/styles";
import { FormValues } from "@/types/formTypes/interfaces";
import { supabase } from "@/lib/supabase";
import { formStyles } from "@/constants/formStyles";
import { Text } from "@rneui/themed";
import { useSupabaseData } from "@/context/supabseDataContext";
import { Picker } from "@react-native-picker/picker";

const SemillaForm: React.FC<{ initialValues?: FormValues }> = ({
  initialValues,
}) => {
  const { especies, procedencias, fetchData } = useSupabaseData();

  useEffect(() => {
    // fetchData("especie");
    fetchData("procedencia");
  }, []);

  console.log(especies)
  console.log(procedencias)

  const defaultValues: FormValues = {
    cantidad: 0,
    fecha_recepcion: null,
    fecha_colecta: null,
    porcentaje_germinacion: 0,
    peso_enviado: 0,
    peso_100_semillas: 0,
    peso_recibido: 0,
    condicion_semilla: "",
    id_especie: null,
    id_procedencia: null,
    rut_colector: "",
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      // const { error } = await supabase
      //   .from("semilla")
      //   .upsert(values, { onConflict: "id" });
      // if (error) throw error;
      console.log(values);
      actions.resetForm();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Text h1> Ingresar Semilla </Text>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={semillaValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
          <ScrollView
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={styles.scrollContainer}
          >
            <View style={formStyles.formContainer}>
              {/* <TextInputField
                label="Cantidad"
                placeholder="Cantidad"
                value={String(values.cantidad)}
                error={errors.cantidad}
                onChangeText={handleChange("cantidad")}
                keyboardType="numeric"
              /> */}

              {/* <DatePickerField
                value={values.fecha_recepcion || new Date()}
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || values.fecha_recepcion;
                  setFieldValue("fecha_recepcion", currentDate);
                }}
                error={errors.fecha_recepcion}
                label="fecha_recepcion"
              />

              <DatePickerField
                value={values.fecha_colecta || new Date()}
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate;
                  setFieldValue("fecha_colecta", currentDate);
                }}
                error={errors.fecha_colecta}
                label="fecha_colecta"
              />

              <TextInputField
                label="Porcentaje Germinación"
                placeholder="Porcentaje Germinación"
                value={String(values.porcentaje_germinacion)}
                error={errors.porcentaje_germinacion}
                onChangeText={handleChange("porcentaje_germinacion")}
                keyboardType="numeric"
              />

              <TextInputField
                label="Peso Enviado"
                placeholder="Peso Enviado"
                value={String(values.peso_enviado)}
                error={errors.peso_enviado}
                onChangeText={handleChange("peso_enviado")}
                keyboardType="numeric"
              />

              <TextInputField
                label="Peso 100 Semillas"
                placeholder="Peso 100 Semillas"
                value={String(values.peso_100_semillas)}
                error={errors.peso_100_semillas}
                onChangeText={handleChange("peso_100_semillas")}
                keyboardType="numeric"
              />

              <TextInputField
                label="Peso Recibido"
                placeholder="Peso Recibido"
                value={String(values.peso_recibido)}
                error={errors.peso_recibido}
                onChangeText={handleChange("peso_recibido")}
                keyboardType="numeric"
              />

              <TextInputField
                label="Condición Semilla"
                placeholder="Condición Semilla"
                value={values.condicion_semilla}
                error={errors.condicion_semilla}
                onChangeText={handleChange("condicion_semilla")}
              /> */}

              {/* <Picker
                selectedValue={values.id_especie}
                onValueChange={(itemValue) =>
                  setFieldValue("id_especie", itemValue)
                }
              >
                {procedencias.map((procedencia) => (
                  <Picker.Item
                    key={procedencia.id_procedencia}
                    label={procedencia.nombre_procedencia}
                    value={procedencia.id_procedencia}
                  />
                ))}
              </Picker> */}


              {/* AGREGAR EL ERROR */}
              {/* <TextInputField
                label="RUT Colector"
                placeholder="RUT Colector"
                value={values.rut_colector}
                error={errors.rut_colector}
                onChangeText={handleChange("rut_colector")}
              /> */}

              <Button title="Guardar" onPress={handleSubmit as any} />
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SemillaForm;
