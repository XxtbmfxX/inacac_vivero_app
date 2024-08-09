import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

import { useRouter } from 'expo-router'

const SingIn = () => {

  const router = useRouter() 

  return (
    <View>
      <Text>SingIn</Text>
      <Button onPress={() => {
						router.push("/sign-up");
					}} >
        <Text>Ir a sing-up</Text>
      </Button>

    </View>
  )
}

export default SingIn