import DefaultPagesProps from '../types/DefaultPagesProps.type';
import React, { useEffect, useRef } from 'react';
import { View, Pressable, Image, ScrollView, Text } from 'react-native';
import styles from '../styles/screens/Home.styles';
import Header from '../components/Header.component';
import BuoyComponent from '../components/Buoy.component';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import getBuoys from '../services/asyncThunk/getBuoys';
import LocationData from '../types/LocationData.type';
import getLocationHistory from '../services/asyncThunk/getLocationHistory';
import { clearHistory } from '../store/slices/map';

export default function HomeScreen({ navigation }: DefaultPagesProps) {
    const dispatch = useDispatch<AppDispatch>();
    const {
        locations,
        locationsHistory,
        loading,
        error
    } = useSelector((state: RootState) => state.maps);

    const lines = [
        { latitude: -23.55052, longitude: -46.633308 },
        { latitude: -23.55052, longitude: -46.633308 + 0.01 },
        { latitude: -23.55052 + 0.01, longitude: -46.633308 + 0.01 },
        { latitude: -23.55052 + 0.01, longitude: -46.633308 },
        { latitude: -23.55052, longitude: -46.633308 }
    ]

    useEffect(() => {
        dispatch(getBuoys())
    }, [])

    const mapRef = useRef<MapView>(null);
    function focusBuoy(buoy: LocationData) {
        mapRef.current?.animateToRegion({
            latitude: buoy.latitude,
            longitude: buoy.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }, 1000)
        const startDate = new Date().toUTCString();
        const endDate = new Date().toUTCString(); // Colocar depois com o filtro
        dispatch(getLocationHistory({ buoyId: buoy.buoy.id, startDate, endDate }));
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
                    {locations.map((location) => (
                        <Marker
                            key={location.buoy.id}
                            coordinate={location}
                            title={location.buoy.name}
                            description={location.buoy.description}
                            style={{ zIndex: 2, opacity: !location.buoy.isDeleted ? 1 : 0.5 }}
                            icon={
                                !location.buoy.isDeleted ? require("../assets/ativo.png") : require("../assets/inativo.png")
                            }
                            onPress={() => focusBuoy(location)}
                        >
                        </Marker>
                    ))}
                    {locationsHistory && (
                        <Polyline
                            coordinates={locationsHistory}
                            strokeColor="red"
                            strokeWidth={2}
                        />
                    )}
                </MapView>
                <View style={styles.filters}>
                    <Pressable onPress={() => dispatch(clearHistory())} style={({ pressed }) => [styles.clearHistory, { opacity: pressed ? 0.6 : 1 }]}>
                        <Text style={styles.clearHistoryText}>Limpar</Text>
                    </Pressable>
                    <Pressable onPress={() => console.log("adicionar boia")} style={({ pressed }) => [styles.add, { opacity: pressed ? 0.6 : 1 }]}>
                        <Image source={require("../assets/add.png")} style={{ width: "100%", height: "100%" }} />
                    </Pressable>
                </View>
                <ScrollView style={styles.buoys} contentContainerStyle={{ paddingBottom: 60 }}>
                    {locations.map((location) => (
                        <BuoyComponent key={location.buoy.id} navigation={navigation} locationData={location} focus={focusBuoy} />
                    ))}
                </ScrollView>
            </View>
        </>
    );
}