import { Button, Image, Pressable, Text, TouchableOpacity, View, StatusBar, Platform } from "react-native";
import DefaultPagesProps from "../types/DefaultPagesProps.type";
import styles from "../styles/components/Header.styles";

function Header({ navigation }: DefaultPagesProps) {
    function logout() {
        // Função só pra exemplo
        // Não utilizar essa função, faça no store junto com as coisas do login
        console.log("Logout clicked");
        navigation.replace("Login");
    }

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.header}>
                <Pressable style={styles.logo} onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/logo.png")} style={{ width: "100%", height: "50%" }} />
                </Pressable>
                <Pressable style={styles.buttons} onPress={() => navigation.openDrawer()}>
                    <View style={styles.line} />
                    <View style={styles.line} />
                    <View style={styles.line} />
                </Pressable>
            </View>
        </>
    )
}

export default Header;