import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { formatearFecha } from "@/constants/Utils";

// cuál es el equivalente?
// timestamp without time zone
// character varying

type CardSemillasObject = {
  id_semilla: string;
  cantidad: string;
  fecha_recepcion: Date;
  fecha_colecta: Date;
  porcentaje_germinacion: string;
  peso_enviado: string;
  peso_recibido: string;
  condicion_semilla: string;
  id_especie: string;
  id_procedencia: string;
  especie: { nombre_especie: string };
  procedencia: { nombre_procedencia: string };
  id_bodega: string;
  rut_colector: string;
  Peso_100_semillas: string;
};

interface CardSemillasProps {
  semilla: CardSemillasObject;
}

/**
 * Requiere de queries para la base de datos
 * @param CardSemillasProps
 * @returns
 */
const CardSemillas = ({ semilla }: CardSemillasProps) => {
  const clavesExcluidas = ["id_semilla", "id_especie", "id_procedencia"];

  return (
    <View style={styles.CardStyle}>
      {Object.entries(semilla)
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

export default CardSemillas;
