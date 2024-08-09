import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { Link } from "expo-router";

const TerminosYCondiciones = () => {
  return (
    <SafeAreaView style={styles.safeViewStyle}>
        <Text>TerminosYCondiciones</Text>
      <Link href={"/"} >  
      <Text> Inincio </Text>
      </Link>
    </SafeAreaView>
  );
};

export default TerminosYCondiciones;
