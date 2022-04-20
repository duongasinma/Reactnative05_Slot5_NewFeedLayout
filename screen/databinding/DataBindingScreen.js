import { Text, View, SafeAreaView, Button } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/DataBindingStyles'


/*
stateful => class co ke thua component
stateless => giao dien render boi function
*/
/*
Thread: 
    -Main thread
    -Worker thread
*/
const data = ["Value 1", "Value 2", "Value 3","as"];

export default class DataBindingScreen extends Component {
    name = "As";
    a = 1;
    b = 4;
    state = {
        sum: 0,
        isRenderHelloES7: true
    };
    renderArray = () => {
        return data.map((value, index) => (
            <Text>
                {value}
            </Text>
        ));
    }
    renderHello = () => {
        if(this.state.isRenderHelloES7){
            console.log(`State: ${this.state.isRenderHelloES7}`)
            return this.renderHelloES7();
        }
        console.log(`State: ${this.state.isRenderHelloES7}`)
        return this.renderHelloReact();
    }
    renderHelloReact = () => {
        return <Text>Render Hello React</Text>

    }
    renderHelloES7 = () => {
        return <Text>Render Hello ES7</Text>

    }
    onPressSignIn = () => {
        this.setState({isRenderHelloES7: !this.state.isRenderHelloES7});
    }
    onPressSum = () => {
        let result = this.a + this.b;
        this.setState({sum: result})
        console.log(`SUM: ${result}`)
    }
    render() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>DataBindingScreen, {this.name}</Text>
            <Text>{this.a}</Text>
            <Button
                title="SIGN IN"
                color="#841584"
                onPress={this.onPressSignIn}
            />
            <Button
                title="Cal Sum"
                color="#841584"
                onPress={this.onPressSum}
            />
            <Text>Sum: {this.state.sum}</Text>
            {this.renderHello()}
            {this.renderArray()}
            {
                data.map((value, index) => (
                    <Text>
                        {value}
                    </Text>
                ))
            }
        </SafeAreaView>
    )
  }
}