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
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
