import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { CalculateSequenceNumber } from '../../feature'
import { Header } from '../../common'

const NextComp = () => (
  <TouchableOpacity style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}} onPress={() => Actions.push('SecondScene')}>
    <Text>Next</Text>
  </TouchableOpacity>
)

const FirstScene = () => {
  return(
    <View style={{flex: 1}}>
      <Header title='Test' rightComp={NextComp()}/>
      <CalculateSequenceNumber />
    </View>
  )
}

export default FirstScene