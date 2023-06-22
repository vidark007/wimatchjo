import React from 'react';
import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import ButtonRound from "../components/ButtonRound";

function LoginPage() {

    function onLogin(){

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <StatusBar style="auto" backgroundColor={"white"}/>
                <View style={styles.loginFieldContainer}>
                    <Text style={styles.labelText}>Login</Text>
                    <TextInput style={styles.inputField}/>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput style={styles.inputField}/>
                    <ButtonRound onPress={onLogin}>{"Login"}</ButtonRound>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginFieldContainer:{
        width: "80%",
    },
    labelText:{
        fontSize: 20,
    },
    inputField: {
        borderColor: 'grey',
        borderWidth:0.8,
        borderRadius:50,
        backgroundColor: "#FFFF",
        marginVertical: 5,
        paddingHorizontal: 12,
        paddingVertical:5,
        fontSize: 15,
    }
});
