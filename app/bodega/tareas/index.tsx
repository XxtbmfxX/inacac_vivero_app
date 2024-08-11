import { Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import CardSemillas from "@/components/Cards/CardSemillas";
import { useSupabaseData } from "@/context/supabseDataContext";
import LoadingScreen from "@/components/Animations/LoadingAnimation";
import CommonCard from "@/components/Cards/CommonCard";

const index = () => {
  const { tareas, fetchTareas } = useSupabaseData();

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Link href={"/bodega"}>
        <Text>Volver a Bodega</Text>
      </Link>
      {tareas ? (
        <FlatList
          data={tareas}
          renderItem={({ item }) => <CommonCard item={item} />}
          keyExtractor={(item) => item.id_tarea}
        />
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
};

export default index;
