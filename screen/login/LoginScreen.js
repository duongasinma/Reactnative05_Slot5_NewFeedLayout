import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/LoginStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
export default class LoginScreen extends Component {

//logic 
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <Text style={styles.container_header__text}>Register Now</Text>
            </View>
            <View style={styles.container_form_login}>
                <View style={styles.container_form_login_input}>
                    <View style={styles.container_form_login_input_container}>
                        <Text>Email</Text>
                        <View style={styles.container_form_login_input_container_text} >
                            <FontAwesomeIcon icon={faEnvelope} size={20}/>
                            <TextInput style={styles.container_form_login_input_container_text__input}></TextInput>
                        </View>
                    </View>
                    <View style={[styles.container_form_login_input_container, styles.margin_top_20]}>
                    <Text>Password</Text>
                        <View style={styles.container_form_login_input_container_text} >
                            <FontAwesomeIcon icon={faLock} size={20}/>
                            <TextInput secureTextEntry style={styles.container_form_login_input_container_text__input}></TextInput>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={[styles.btn, styles.btn__primary, styles.btn__primary_text, styles.margin_top_40]}>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn , styles.btn__second, styles.btn__second_text, styles.margin_top_20]}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
  }
//css
}
