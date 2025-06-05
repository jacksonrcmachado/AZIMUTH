import { Button, Image, Pressable, Text, TouchableOpacity, View, StatusBar, Platform } from "react-native";
import DefaultPagesProps from "../types/DefaultPagesProps.type";
import styles from "../styles/components/Header.styles";
import { useState } from "react";

function Header({ navigation }: DefaultPagesProps) {
    const [open, setOpen] = useState(false);

    function toggleMenu() { setOpen(!open) }

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
                barStyle="dark-content" // ou "light-content", conforme o fundo do header
            />
            <View style={styles.header}>
                <Pressable style={styles.logo} onPress={() => navigation.replace("Home")}>
                    <Image source={require("../assets/logo.png")} style={{ width: "100%", height: "50%" }} />
                </Pressable>
                <Pressable style={styles.buttons} onPress={toggleMenu}>
                    <View style={!open ? styles.line : styles.topLine} />
                    <View style={!open ? styles.line : styles.midLine} />
                    <View style={!open ? styles.line : styles.botLine} />
                </Pressable>
                {open && (
                    <View style={styles.menu}>
                        <View style={styles.menuContent}>
                            <View style={styles.links}>
                                 <TouchableOpacity onPress={() => navigation.replace("Home")} style={styles.link}>
                                    <Text style={styles.linkText}>Mapa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.replace("Report")} style={styles.link}>
                                    <Text style={styles.linkText}>Relatórios</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.account}>
                                <TouchableOpacity onPress={logout} style={styles.logoutButton}>
                                    <Text style={styles.logoutText}>Sair</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </View>
            {open && (
                <Pressable style={styles.overlay} onPress={() => setOpen(false)} />
            )}
        </>
    )
}

export default Header;