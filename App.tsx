import {StatusBar} from 'expo-status-bar';
import {Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

export default function App() {
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <StatusBar style="auto" backgroundColor={"white"}/>
                    <Text>Login</Text>
                    <TextInput/>
                    <Text>Password</Text>
                    <TextInput/>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField:{

    }
});
