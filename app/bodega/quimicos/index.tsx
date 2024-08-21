import { Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { Link } from "expo-router";
import LoadingScreen from "@/components/Animations/LoadingAnimation";
import CommonCard from "@/components/Cards/CommonCard";

const index = () => {
  const { químicos, procedencias, fetchData } = useSupabaseData();

  useEffect(() => {
    fetchData("químico", [
      "*",
      "categoría (nombre_categoría)",
      "etiqueta (color_etiqueta)",
    ]);
    fetchData("procedencia");
  }, []);

  console.log(químicos);

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Link href={"/bodega"}>
        <Text>Volver a Bodega</Text>
      </Link>
      {químicos ? (
        <FlatList
          data={químicos}
          renderItem={({ item }) => <CommonCard item={item} />}
          keyExtractor={(item) => item.id_químico}
        />
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
};

export default index;
