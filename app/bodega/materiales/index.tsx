import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import CardMateriales from "@/components/Cards/CardMateriales";


const DATA = [{
  id : "",
  item : ""
}]

const index = () => {
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Link href={"/bodega"}>Volver a Bodega</Link>
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <CardMateriales material={item} />}
        keyExtractor={(item) => item.id}
      > */}
    </SafeAreaView>
  );
};

export default index;
