import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/constants/styles";
import { formatearFecha } from "@/constants/Utils";

type CardMaterialObject = {
  idMaterial: string;
  nombreMaterial: string;
  unidadDeMedida: string;
  cantidad: string;
};

interface CardMaterialsProps {
  material: CardMaterialObject;
}

const CardMaterial = ({ material }: CardMaterialsProps) => {

  const clavesExcluidas = ["created_at"];

  return (
    <View style={styles.CardStyle}>
      {Object.entries(material)
        .filter(([clave]) => !clavesExcluidas.includes(clave))
      
      .map(([clave, valor]) => {
        // Aplicar formateo de fecha solo en las claves que corresponden a fechas
        if (clave.includes("fecha")) {
          valor = formatearFecha(valor);
        }

        return (
          <Text key={clave} style={styles.CardTitleText}>
            {clave}: <Text style={styles.CardDescriptionText}>{valor}</Text>
          </Text>
        );
      })}
    </View>
  );
};

export default CardMaterial;
