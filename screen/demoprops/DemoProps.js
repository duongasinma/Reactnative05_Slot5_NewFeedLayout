import { Text, View, FlatList, SectionList } from 'react-native'
import React, { Component } from 'react'
import { RenderHeader } from './components/DemoText'
import DemoClassComponents from './components/DemoClassComponents'
/*
  common
*/

const dataSectionList = [
  {
    title: "Section 1",
    color: "red",
    data: [
      {
        id: 1,
        title: "Item 1"
      },
      {
        id: 2,
        title: "Item 2"
      },
      {
        id: 3,
        title: "Item 3"
      },
      {
        id: 4,
        title: "Item 4"
      }
    ]
  },
  {
    title: "Section 2",
    color: "blue",
    data: [
      {
        id: 1,
        title: "Item 1"
      },
      {
        id: 2,
        title: "Item 2"
      },
      {
        id: 3,
        title: "Item 3"
      },
      {
        id: 4,
        title: "Item 4"
      }
    ]
  },
  {
    title: "Section 3",
    color: "red",
    data: [
      {
        id: 1,
        title: "Item 1"
      },
      {
        id: 2,
        title: "Item 2"
      },
      {
        id: 3,
        title: "Item 3"
      },
      {
        id: 4,
        title: "Item 4"
      }
    ]
  },
  {
    title: "Section 4",
    color: "blue",
    data: [
      {
        id: 1,
        title: "Item 1"
      },
      {
        id: 2,
        title: "Item 2"
      },
      {
        id: 3,
        title: "Item 3"
      },
      {
        id: 4,
        title: "Item 4"
      }
    ]
  },
]
const dataFlatList =[
  {
    id: 1,
    title: "Item 1"
  },
  {
    id: 2,
    title: "Item 2"
  },
  {
    id: 3,
    title: "Item 3"
  },
  {
    id: 4,
    title: "Item 4"
  },
  {
    id: 5,
    title: "Item 5"
  },
]
export default class DemoProps extends Component {
  
  renderItem = ({item}) => {
    return(
      <Text>{item.title}</Text>
    );
  }

  renderHeaderSectionList = ({section}) => {
    return(
      <Text style={{
        padding:10,
        backgroundColor: section.color,
        fontWeight: "500",
        margin: 10
      }}>{section.title}</Text>
    );
  }

  renderItemSectionList = ({item}) => {
    return(
      <Text style={{
        margin: 10,
        borderWidth:1,
        padding: 20,
        borderRadius:8

      }}>{item.title}</Text>
    );
  }

  render() {
    return (
      <View>
        <Text>DemoProps</Text>
        {/* <Text>DemoProps</Text>
        <Text>DemoProps</Text>
        <RenderHeader title="Hello as" data={data}/>
        <DemoClassComponents title="Duongas"/> */}
        <FlatList
            data = {dataFlatList}
            renderItem = {this.renderItem}
        />
        <SectionList
          stickyHeaderIndices={false}
          sections={dataSectionList}
          renderSectionHeader={this.renderHeaderSectionList}
          renderItem={this.renderItemSectionList}
        />
      </View>
    )
  }
}