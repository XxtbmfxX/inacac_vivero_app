import { Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { Link } from "expo-router";
import LoadingScreen from "@/components/Animations/LoadingAnimation";
import CommonCard from "@/components/Cards/CommonCard";

const plantacion = () => {
  const { plantación, fetchPlantación } = useSupabaseData();

  useEffect(() => {
    fetchPlantación();
  }, []);


  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Link href={"/bodega"}>
        <Text>Volver a Bodega</Text>
      </Link>
      {plantación ? (
        <FlatList
          data={plantación}
          renderItem={({ item }) => <CommonCard item={item} />}
          keyExtractor={(item) => item.id_plantación}
        />
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
};

export default plantacion;
