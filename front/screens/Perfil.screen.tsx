import { StyleSheet, StatusBar, Platform, Button, Text, View } from "react-native";
import Header from '../components/Header.component';

export default function Perfil({ navigation }: { navigation: any }) {
    return (

        <>
            <Header navigation={navigation} />
            <View style={styles.container}>
                <Text>PERFIL</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})