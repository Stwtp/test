import React, { Component } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Dimensions
 } from 'react-native'
import { Actions } from 'react-native-router-flux'

import axios from 'axios'
const screenHeight = Dimensions.get('screen').height
class FindRestaurant extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetch: false,
      data: [],
      next: null
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData(){
    this.setState({isFetch: true})
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=บางซื่อ&type=restaurant&key=AIzaSyDy0wFnIsHw42fUJfFrSdJad3vBF4jVdfk`
    const res = await axios.get(url)
    this.setState({
      isFetch: false,
      next: res.data.next_page_token,
      data: [...this.state.data, ...res.data.results]
    })
  }

  renderItem({item}) {
    return(
      <View style={styles.card}>
        <Text style={styles.text}>{`Name: ${item.name}`}</Text>
        <Text style={styles.text}>{`Rating: ${item.rating}`}</Text>
        <Text style={styles.text}>{`Address: ${item.formatted_address}`}</Text>
      </View>
    )
  }

  render() {
    const {isFetch, data} = this.state
    return (
      <View style={styles.container}>
        {isFetch && <ActivityIndicator size='large'/>}
        <FlatList
          data={data}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
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
    right: 0
  },
  card: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  }
})
export default FindRestaurant