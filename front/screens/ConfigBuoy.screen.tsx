import { Button, Text, View } from "react-native";
import Buoy from "../types/Buoy.type";
import LocationData from "../types/LocationData.type";

export default function ConfigBuoy({ navigation, route }: { navigation: any, route: any }) {
    const { locationData }: { locationData: LocationData } = route.params;
    return (
        <View>
            <Text>Configuração do Bóia</Text>
            <Text>Nome: {locationData.buoy.name}</Text>
            <Text>Descrição: {locationData.buoy.description}</Text>
        </View>
    );
}