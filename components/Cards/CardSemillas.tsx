import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/constants/styles";

// cuál es el equivalente?
// timestamp without time zone
// character varying

type CardSemillasObject = {
  id_semilla: string;
  cantidad: string;
  fecha_recepcion: string;
  fecha_colecta: string;
  porcentaje_germinacion: string;
  peso_enviado: string;
  peso_recibido: string;
  condicion_semilla: string;
  id_especie: string;
  id_procedencia: string;
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
  console.log(semilla);

  return (
    <View style={styles.CardStyle}>
      <Text style={styles.cardText}>{semilla.id_semilla}</Text>
      <Text style={styles.cardText}>{semilla.cantidad}</Text>
      <Text style={styles.cardText}>{semilla.fecha_recepcion}</Text>
      <Text style={styles.cardText}>{semilla.fecha_colecta}</Text>
      <Text style={styles.cardText}>{semilla.porcentaje_germinacion}</Text>
      <Text style={styles.cardText}>{semilla.peso_enviado}</Text>
      <Text style={styles.cardText}>{semilla.peso_recibido}</Text>
      <Text style={styles.cardText}>{semilla.condicion_semilla}</Text>
      <Text style={styles.cardText}>{semilla.id_especie}</Text>
      <Text style={styles.cardText}>{semilla.id_bodega}</Text>
      <Text style={styles.cardText}>{semilla.rut_colector}</Text>
      <Text style={styles.cardText}>{semilla.rut_colector}</Text>
      <Text style={styles.cardText}>{semilla.Peso_100_semillas}</Text>
    </View>
  );
};

export default CardSemillas;
