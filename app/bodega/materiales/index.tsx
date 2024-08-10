import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { Link } from "expo-router";
import LoadingScreen from "@/components/Animations/LoadingAnimation";
import CardMaterial from "@/components/Cards/CardMateriales";

const index = () => {
  const { materiales, fetchMateriales } = useSupabaseData();

  useEffect(() => {
    fetchMateriales();
  }, []);

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Link href={"/bodega"}>
        <Text>Volver a Bodega</Text>
      </Link>
      {materiales ? (
        <FlatList
          data={materiales}
          renderItem={({ item }) => <CardMaterial material={item} />}
          keyExtractor={(item) => item.id_material}
        />
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
};

export default index;
