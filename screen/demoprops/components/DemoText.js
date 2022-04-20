import { Text, View, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react'

export const RenderHeader = (props) => {

    // const onPressa = () => {
    //     console.log(`Gia tri cua props ${props.title}`)
    // }

    return(
        <View>
            <Text>{props.title}</Text>
        {props.data.map((value,index)=>(
            <Text>{value}</Text>
        ))}
        {/* <TouchableOpacity
        >
            <Button>Button</Button>
        </TouchableOpacity> */}
        </View>
        
    );
}