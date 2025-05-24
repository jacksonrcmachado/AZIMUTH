import DefaultPagesProps from '../types/DefaultPagesProps.type';
import React, { useRef } from 'react';
import { View, Pressable, Image, ScrollView } from 'react-native';
import styles from '../styles/screens/Home.styles';
import Header from '../components/Header.component';
import Buoy from '../components/Buoy.component';
import MapView, { Marker } from 'react-native-maps';
import BuoyProps from '../types/BuoyProps.type';

const buoys = [
    {
        id: 1,
        name: "Boia 1",
        state: "active",
        location: {
            latitude: -23.561414,
            longitude: -46.655881,
        },
    },
    {
        id: 2,
        name: "Boia 2",
        state: "maintenance",
        location: {
            latitude: -23.587416,
            longitude: -46.657634,
        },
    },
    {
        id: 3,
        name: "Boia 3",
        state: "inactive",
        location: {
            latitude: -23.599112,
            longitude: -46.719312,
        },
    },
]

export default function HomeScreen({ navigation }: DefaultPagesProps) {
    const mapRef = useRef<MapView>(null);

    function focusBuoy(buoy: BuoyProps) {
        mapRef.current?.animateToRegion({
            latitude: buoy.location.latitude,
            longitude: buoy.location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }, 1000)
    }

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.main}>
                <MapView
                    style={styles.map}
                    ref={mapRef}
                    initialRegion={{
                        latitude: -23.55052,
                        longitude: -46.633308,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsPointsOfInterest={false}
                    customMapStyle={[
                        {
                            featureType: 'poi',
                            stylers: [{ visibility: 'off' }],
                        },
                        {
                            featureType: 'transit',
                            stylers: [{ visibility: 'off' }],
                        },
                    ]}
                >
                    {buoys.map((buoy) => (
                        <Marker
                            key={buoy.id}
                            coordinate={buoy.location}
                            title={buoy.name}
                            description={`Estado: ${buoy.state}`}
                            style={{ backgroundColor: "red" }}
                            icon={
                                buoy.state === "active"
                                    ? require("../assets/ativo.png")
                                    : buoy.state === "maintenance"
                                        ? require("../assets/manutencao.png")
                                        : require("../assets/inativo.png")
                            }
                            onPress={() => focusBuoy(buoy)}
                        >
                        </Marker>
                    ))}
                </MapView>
                <View style={styles.filters}>
                    <Pressable onPress={() => console.log("adicionar boia")} style={styles.add}>
                        <Image source={require("../assets/add.png")} style={{ width: "100%", height: "100%" }} />
                    </Pressable>
                </View>
                <ScrollView style={styles.buoys} contentContainerStyle={{ paddingBottom: 60 }}>
                    {buoys.map((buoy) => (
                        <Buoy key={buoy.id} buoy={buoy} />
                    ))}
                </ScrollView>
            </View>
        </>
    );
}