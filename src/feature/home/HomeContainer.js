import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
 } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'

import config from '../../config'

class HomeContainer extends Component {

  componentDidMount() {
    firebase.auth()
    .signInAnonymously()
    .then(credential => {
      if (credential) {
        console.log('default app user ->', credential.user.toJSON());
      }
    })
  }
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