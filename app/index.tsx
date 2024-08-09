import { styles } from "@/constants/styles";
import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Text h2>Home</Text>
      <Link href="/ingresar">
        <Text h3>Ingresar 🥵 💀</Text>
      </Link>
      <Link href={"/terminos_y_condiciones"}>
        <Text h3>Términos y Condiciones</Text>
      </Link>
    </SafeAreaView>
  );
}
