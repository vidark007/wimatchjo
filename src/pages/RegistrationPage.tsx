import React from 'react';
import {
    Button,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {StatusBar} from "expo-status-bar";
import ButtonRound from "../components/ButtonRound";

interface Props{
    children ?: React.ReactNode;
    onPress : () => void,
}
function RegistrationPage(props:Props) {

    function onCreateAccount(){

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <StatusBar style="auto" backgroundColor={"white"}/>
                <View style={styles.loginFieldContainer}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput style={styles.inputField}/>
                    <Text style={styles.labelText}>Login</Text>
                    <TextInput style={styles.inputField}/>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.inputField}/>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput style={styles.inputField} secureTextEntry={true}/>
                    <ButtonRound onPress={onCreateAccount}>{"Login"}</ButtonRound>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}

export default RegistrationPage;

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
    },
    button: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "grey",
        marginBottom:18,
        borderRadius: 50,
        //Android
        elevation: 2,
        //------IOS
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        width: "100%",
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});