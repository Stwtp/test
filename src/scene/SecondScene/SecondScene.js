import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { FindRestaurant } from '../../feature'
import { Header } from '../../common'

const BackComp = () => (
  <TouchableOpacity style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}} onPress={() => Actions.pop()}>
    <Text>Back</Text>
  </TouchableOpacity>
)
const SecondScene = () => {
  return(
    <View style={{flex: 1}}>
      <Header title='Test' leftComp={BackComp()}/>
      <FindRestaurant />
    </View>
  )
}

export default SecondScene