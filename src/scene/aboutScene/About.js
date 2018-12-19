import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
  return(
    <View>
      <Text>About</Text>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default About