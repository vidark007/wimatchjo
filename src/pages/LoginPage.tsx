import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {StatusBar} from "expo-status-bar";

function LoginPage() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <StatusBar style="auto" backgroundColor={"white"}/>
                <View style={styles.loginFieldContainer}>
                    <Text>Login</Text>
                    <TextInput style={styles.inputField}/>
                    <Text>Password</Text>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginFieldContainer:{
        width: "80%",
    },
    inputField: {
        borderColor: 'grey',
        borderWidth:0.8,
        borderRadius:5,
        marginVertical: 5,
        paddingHorizontal: 8,
    }
});
