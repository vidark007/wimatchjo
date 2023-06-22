import {StyleSheet} from 'react-native';
import LoginPage from "./src/pages/LoginPage";

export default function App() {
    return (
        <LoginPage/>
    );
}

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
