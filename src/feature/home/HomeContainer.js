import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
 } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import config from '../../config'

class HomeContainer extends Component {

  render() {
    return (
      <View>
        <Text>Home feature</Text>
        <TouchableOpacity onPress={() => Actions.push('About')}>
          <Text>To about</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state[config.name]
  }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)