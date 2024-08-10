import { styles } from "@/constants/styles";
import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ ...styles.safeViewStyle, justifyContent: "space-around" }}
    >
      <Text h2>Inventario Vivero 🌱</Text>
      <View style={{gap: 50 }} >
        <Link href="/ingresar">
          <Text h3>Ingresar como Administrador</Text>
        </Link>
        <Link href="/">
          <Text h3>Ingresar como Trabajador</Text>
        </Link>
      </View>

      <Link href={"/terminos_y_condiciones"}>
        <Text h3>Términos y Condiciones</Text>
      </Link>
    </SafeAreaView>
  );
}
