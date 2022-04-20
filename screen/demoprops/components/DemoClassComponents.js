import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class DemoClassComponents extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}