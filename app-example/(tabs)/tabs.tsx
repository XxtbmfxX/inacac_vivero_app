import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Auth from '@/components/Auth'
import Account from '@/components/Account'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HelloWave } from '@/components/HelloWave'

export default function App() {

  return (
    <SafeAreaView>
      <Link href={"/explore"}>owo</Link>
      <HelloWave/>
      <HelloWave/>
      <HelloWave/>
      <HelloWave/>
    </SafeAreaView>
  )
}