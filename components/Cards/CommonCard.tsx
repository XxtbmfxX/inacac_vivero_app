import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { formatearFecha } from "@/constants/Utils";


const CommonCard = ({ item }: any) => {
  const clavesExcluidas = ["id_semilla", "id_especie", "id_procedencia", "id_tarea", "id_categoría", "id_etiqueta","id_plantación", "created_at"];
  return (
    <View style={styles.CardStyle}>
      {Object.entries(item)
        .filter(([clave]) => !clavesExcluidas.includes(clave))
        .map(([clave, valor]) => {
          // Aplicar formateo de fecha solo en las claves que corresponden a fechas
          if (clave.includes("fecha")) {
            valor = formatearFecha(valor);
          }

          if (typeof valor === "object" && valor !== null) {
            return Object.entries(valor).map(([subClave, subValor]) => (
              <Text key={`${clave}_${subClave}`} style={styles.CardTitleText}>
                {subClave}:{" "}
                <Text style={styles.CardDescriptionText}>{subValor}</Text>
              </Text>
            ));
          } else {
            return (
              <Text key={clave} style={styles.CardTitleText}>
                {clave}: <Text style={styles.CardDescriptionText}>{valor}</Text>
              </Text>
            );
          }
        })}
    </View>
  );
};

export default CommonCard;
