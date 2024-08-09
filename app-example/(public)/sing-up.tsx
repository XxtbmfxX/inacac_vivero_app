import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

import { useRouter } from 'expo-router'

const SingUp = () => {

  const router = useRouter() 

  return (
    <View>
      <Text>SingUp</Text>
      <Button onPress={() => {
						router.push("/sign-in");
					}} >
        <Text>Ir a sing-in</Text>
      </Button>

    </View>
  )
}

export default SingUp