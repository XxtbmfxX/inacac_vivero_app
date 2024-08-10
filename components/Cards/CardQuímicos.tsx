import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { formatearFecha } from "@/constants/Utils";

// cuál es el equivalente?
// timestamp without time zone
// character varying

type CardQuímicoObject = {
  id_químico: string;
  fecha_ingreso: Date;
  contenido: string;
  nombre: string;
  id_categoría: number;
  categoría: { nombre_categoría: string };
  etiqueta: { color_etiqueta: string };
  id_etiqueta: number;
  presentacion: string;
  stock_minimo: number;
  necesidades: string;
};

interface CardQuímicosProps {
  químico: CardQuímicoObject;
}

/**
 * Requiere de queries para la base de datos
 * @param CardQuímicosProps
 * @returns
 */
const CardQuímico = ({ químico }: CardQuímicosProps) => {
console.log(químico.etiqueta)
  

  const clavesExcluidas = ["id_categoría", "id_etiqueta"];

  return (
    <View style={styles.CardStyle}>
      {Object.entries(químico)
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

export default CardQuímico;
