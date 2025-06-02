import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/components/Buoy.styles";
import LocationData from "../types/LocationData.type";

function Buoy(props: { navigation: any, locationData: LocationData, focus: (buoy: LocationData) => void }) {
    const { navigation, locationData, focus } = props;
    return (
        <Pressable style={({ pressed }) => [styles.buoy, { opacity: pressed ? 0.6 : 1 }]} onPress={() => focus(locationData)} onLongPress={() => navigation.navigate("ConfigBuoy", { locationData })}>
            <View style={styles.leftComponents}>
                {!locationData.buoy.isDeleted ? <View style={styles.GreenAlert} /> : <View style={styles.redAlert} />}
                <Text style={styles.name}>{locationData.buoy.name}</Text>
            </View>
            <View style={styles.rightComponents}>
                <Pressable onPress={() => navigation.navigate("ConfigBuoy", { locationData })} style={styles.button}>
                    <Image source={require("../assets/config.png")} style={{ width: "100%", height: "100%" }} />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default Buoy;