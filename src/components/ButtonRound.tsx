import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

interface Props{
    children ?: React.ReactNode;
    onPress : () => void,
}
function ButtonRound(props:Props) {
    return (
        <Pressable  style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={props.onPress}>
            <View>
                <Text style={[styles.buttonText]}>{props.children}</Text>
            </View>
        </Pressable>
    );
}

export default ButtonRound;

const styles = StyleSheet.create({
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