import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/components/Buoy.styles";
import LocationData from "../types/LocationData.type";

function Buoy(props: { locationData: LocationData, focus: (buoy: LocationData) => void }) {
    const { locationData, focus } = props;
    return (
        <View style={styles.buoy}>
            <View style={styles.leftComponents}>
                {!locationData.buoy.isDeleted ? <View style={styles.GreenAlert} /> : <View style={styles.redAlert} />}
                <Text style={styles.name}>{locationData.buoy.name}</Text>
            </View>
            <View style={styles.rightComponents}>
                <Pressable onPress={() => focus(locationData)} style={styles.button}>
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