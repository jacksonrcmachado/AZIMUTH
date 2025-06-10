import { Button, Image, Pressable, Text, TouchableOpacity, View, StatusBar, Platform } from "react-native";
import DefaultPagesProps from "../types/DefaultPagesProps.type";
import styles from "../styles/components/Header.styles";
import { Ionicons } from '@expo/vector-icons';

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
                    <Image source={require("../assets/logo-branca.png")} style={{ width: "100%", height: "50%" }} />
                </Pressable>
                <Pressable style={styles.buttons} onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={27} color={"white"} />
                </Pressable>
            </View>
        </>
    )
}

export default Header;