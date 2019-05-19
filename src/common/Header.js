import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const Header = (props) => {
  return (
    <View style={styles.header}>
      {props.leftComp || <View style={styles.empty}/>}
      <Text style={styles.title}>{props.title}</Text>
      {props.rightComp || <View style={styles.empty}/>}
    </View>
  )
}

Header.defaultProps = {
  title: '',
  leftComp: null,
  rightComp: null,
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 40,
    marginTop: getStatusBarHeight(),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(151, 151, 151)'
  },
  title: {
    flex: 0.7,
    fontSize: 24,
    textAlign: 'center'
  },
  empty:{
    flex: 0.3
  }
})

export default Header
