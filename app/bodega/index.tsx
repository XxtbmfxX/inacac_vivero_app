import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { styles } from "@/constants/styles";

import NavButton from '@/components/navigation/NavButton';

const bodega = () => {
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <Text style={{fontSize: 20, textAlign: "center"}} >bodega</Text>

      <View style={styles.container}>
        <View style={styles.column}>


          <NavButton título="Semillas" screen={"/bodega/semillas"} />
        </View>

        <View style={styles.column}>
          <NavButton título="Químicos" screen={"/bodega/químicos"} />

          <NavButton título="Materiales" screen={"/bodega/materiales"} />

        </View>
      </View>

    </SafeAreaView>
  )
}



export default bodega