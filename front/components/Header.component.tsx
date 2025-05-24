import { Image, Pressable, View } from "react-native";
import DefaultPagesProps from "../types/DefaultPagesProps.type";
import styles from "../styles/components/Header.styles";

function Header({navigation}: DefaultPagesProps) {
    return (
        <View style={styles.header}>
            <Pressable style={styles.logo} onPress={() => navigation.replace("Home")}>
                <Image source={require("../assets/logo.png")} style={{ width: "100%", height: "50%" }}  />
            </Pressable>
            <View style={styles.buttons}>

            </View>
        </View>
    )
}

export default Header;