import { Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { useSupabaseData } from "@/context/supabseDataContext";
import { Link } from "expo-router";
import LoadingScreen from "@/components/Animations/LoadingAnimation";
import CardQuímico from "@/components/Cards/CardQuímicos";

const index = () => {
  const { químicos, fetchQuímicos } = useSupabaseData();

  useEffect(() => {
    fetchQuímicos();
  }, []);

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Link href={"/bodega"}>
        <Text>Volver a Bodega</Text>
      </Link>
      {químicos ? (
        <FlatList
          data={químicos}
          renderItem={({ item }) => <CardQuímico químico={item} />}
          keyExtractor={(item) => item.id_químico}
        />
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
};

export default index;
