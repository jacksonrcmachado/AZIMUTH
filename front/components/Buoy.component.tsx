import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/components/Buoy.styles";
import BuoyProps from "../types/BuoyProps.type";

function Buoy(props: { buoy: BuoyProps, focus: (buoy: BuoyProps) => void }) {
    const { buoy, focus } = props;
    return (
        <View style={styles.buoy}>
            <View style={styles.leftComponents}>
                {buoy.state === "active" ? <View style={styles.GreenAlert} /> : null}
                {buoy.state === "maintenance" ? <View style={styles.yellowAlert} /> : null}
                {buoy.state === "inactive" ? <View style={styles.redAlert} /> : null}
                <Text style={styles.name}>{buoy.name}</Text>
            </View>
            <View style={styles.rightComponents}>
                <Pressable onPress={() => focus(buoy)} style={styles.button}>
                    <Image source={require("../assets/location.png")} style={{ width: "100%", height: "100%" }} />
                </Pressable>
                <Pressable onPress={() => console.log("configurar boia")} style={styles.button}>
                    <Image source={require("../assets/config.png")} style={{ width: "100%", height: "100%" }} />
                </Pressable>
            </View>
        </View>
    )
}

export default Buoy;