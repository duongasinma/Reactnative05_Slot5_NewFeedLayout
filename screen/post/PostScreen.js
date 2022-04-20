import { SafeAreaView, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/PostStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faPenClip } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
const dataAvatar = [
    {
        name: 'Sahara',
        image: require('../../asset/images/image1.jpeg'),
    },
    {
        name: 'Sophia',
        image: require('../../asset/images/image2.jpeg'),
    },
    {
        name: 'Hana',
        image: require('../../asset/images/image3.jpeg'),
    },
    {
        name: 'Naul',
        image: require('../../asset/images/image4.jpeg'),
    },
    {
        name: 'Kimihana',
        image: require('../../asset/images/image5.jpeg'),
    },
    {
        name: 'Yoko',
        image: require('../../asset/images/image6.jpeg'),
    },
    {
        name: 'Su',
        image: require('../../asset/images/image7.jpeg'),
    },
    {
        name: 'Finnia',
        image: require('../../asset/images/image8.jpeg'),
    },
    {
        name: 'Subana',
        image: require('../../asset/images/image9.jpeg'),
    },
    {
        name: 'Corohe',
        image: require('../../asset/images/image10.jpeg'),
    }
];

const dataFeeds = [
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sahara",
        image: require('../../asset/images/image1.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sophia",
        image: require('../../asset/images/image2.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "3 minutes"
    
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Hana",
        image: require('../../asset/images/image3.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "5 minutes"
    
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Naul",
        image: require('../../asset/images/image4.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Kimihana",
        image: require('../../asset/images/image5.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    }
]

export default class PostScreen extends Component {
    
    renderHeader = () => {
        return (
            <View style={styles.container_header}>
                <View style={styles.container_header_content}>
                    <FontAwesomeIcon icon={faCamera}/>
                    <Text style={styles.container_header__text}>Feed</Text>
                    <FontAwesomeIcon icon={faPenClip}/>
                </View>
            </View>           
        );
    }
    
    renderAvata = () => {
        return (
            <View style={styles.container_avatar}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        dataAvatar.map((data,index) => (
                            <View key={index} style={styles.container_avatar__sub}>
                                <Image style={styles.container_avatar__image} source={data.image}/>
                                <Text style={styles.text}>{data.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }

    renderItem = ({item}) => {
        return(
            <View style={styles.container_feed}>
                <View style={styles.container_feed_header}>
                    <View style={styles.container_feed_header_container}>
                        <Image style={styles.container_avatar__image} source = {item.image}/>
                        <View style={styles.container_feed_header_container_title}>
                            <Text style={styles.text}>{item.title}</Text>
                            <View style={styles.container_feed_header_container_title_name}>
                                <Text>{item.name}</Text>
                                <Text>{item.time}</Text>
                            </View>
                        </View>
                    </View>
                    <FontAwesomeIcon icon={faEllipsis}/>
                </View>
                <View>
                    <Text style={styles.text}>{item.content}</Text>
                </View>
                <View style={styles.container_footer}>
                    <View style={styles.container_footer_component}>
                        <Image style={styles.container_footer_component__image} source={require('../../asset/heart.png')}/>
                        <Text style={styles.text}>2</Text>
                    </View>
                    <View style={styles.container_footer_component}>
                        <Image style={styles.container_footer_component__image} source={require('../../asset/comment.png')}/>
                        <Text style={styles.text}>4</Text>
                    </View>                       
                </View>                                                     
            </View>
        );
    }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            {this.renderHeader()}
            {this.renderAvata()}
            <FlatList
            data = {dataFeeds}
            renderItem = {this.renderItem}
            />
        </SafeAreaView>
    )
  }
}