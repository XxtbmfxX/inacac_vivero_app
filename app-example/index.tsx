import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@rneui/themed'

const index = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: "center"}} >
      <Text h1> Vivero Hillilemu </Text>
    </SafeAreaView>
  )
}

export default index