import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions
 } from 'react-native'
import { Actions } from 'react-native-router-flux'

import axios from 'axios'
const screenHeight = Dimensions.get('screen').height
class CalculateSequenceNumber extends Component {
  constructor(props){
    super(props)
    this.checkSize = this.checkSize.bind(this)
    this.state = {
      sequence: [3, 5, 9, 15],
      isScrollable: false
    }
  }
s
  next(x){
    const res = 3 + x * ( x - 1 )
    this.setState((state) => ({ sequence: [...state.sequence, res] }))
  }

  checkSize(contentWidth, contentHeight){
    if(contentHeight > screenHeight - 200) return this.setState({ isScrollable: true })
    return this.setState({ isScrollable: false })
  }

  render() {
    const { sequence, isScrollable } = this.state
    return (
      <View style={styles.container}>
        <View style={{height: screenHeight - 200}}>
          <ScrollView scrollEnabled={isScrollable} onContentSizeChange={this.checkSize}>
            <Text style={styles.text}>{`Sequence Number\n${sequence.join(', ')}`}</Text>
          </ScrollView>
        </View>
        <View style={styles.calBtn}>
          <TouchableOpacity style={styles.btn} onPress={() => this.next(sequence.length +1)}>
            <Text style={[styles.text, {textAlign: 'center'}]}>Calculate next number</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    fontSize: 18,
    color: '#333333'
  },
  calBtn: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderWidth: 1,
    borderRadius: 40,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  }
})
export default CalculateSequenceNumber