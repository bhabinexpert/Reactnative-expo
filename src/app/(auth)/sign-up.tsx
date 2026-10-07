import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle ={{flexGrow: 1}}
    className='bg-white'
    keyboardShouldPersistTaps="handled"
    >
      <View className='flex-1 justify-center px-6 py-12'>
      <Text>HI</Text>
       </View> 

    </ScrollView>
  )
}