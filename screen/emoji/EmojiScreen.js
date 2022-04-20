import { Text, View , TouchableOpacity, Image} from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/EmojiStyles'

const emojiData = [
    {
        image: require('../../asset/emoji/like.png'),
    },
    {
        image: require('../../asset/emoji/love.png'),
    },
    {
        image: require('../../asset/emoji/haha.png'),
    },
    {
        image: require('../../asset/emoji/care.png'),
    },
    {
        image: require('../../asset/emoji/angry.png'),
    }
    
]

export default class EmojiScreen extends Component {
    
    state = {
        emojiSelected: null
    }

    onPressIcon = (data) =>{
        this.setState({emojiSelected: data});
        console.log(data)
    }

    render() {
    return (
      <View style={styles.root}>
        <Text>What do you feel?</Text>
        <Image source={this.state.emojiSelected}/>
        <View style={styles.row}>
            {
                emojiData.map((data, index) =>(
                    <TouchableOpacity
                        key={index}
                        onPress={() => this.onPressIcon(data.image)}
                        // onPress = {this.onPressIcon} ko xai dc cach nay vi ko custom dc param
                    >
                        <Image style={styles.emoji_icon} key = {index} source = {data.image}/>
                    </TouchableOpacity>
                ))
            }
        </View>
      </View>
    )
  }
}