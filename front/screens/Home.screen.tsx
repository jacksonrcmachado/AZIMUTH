import DefaultPagesProps from '../types/DefaultPagesProps.type';
import React, { useEffect, useRef } from 'react';
import { View, Pressable, Image, ScrollView } from 'react-native';
import styles from '../styles/screens/Home.styles';
import Header from '../components/Header.component';
import Buoy from '../components/Buoy.component';
import MapView, { Marker } from 'react-native-maps';
import BuoyProps from '../types/Buoy.type';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import getBuoys from '../services/asyncThunk/getBuoys';
import LocationData from '../types/LocationData.type';

export default function HomeScreen({ navigation }: DefaultPagesProps) {
    const dispatch = useDispatch<AppDispatch>();
    const {
        locations,
        loading,
        error
    } = useSelector((state: RootState) => state.maps);

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
                            description={`latitude: ${location.latitude}, longitude: ${location.longitude}`}
                            style={{ backgroundColor: "red" }}
                            icon={
                                !location.buoy.isDeleted ? require("../assets/ativo.png") : require("../assets/inativo.png")
                            }
                            onPress={() => focusBuoy(location)}
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
                    {locations.map((location) => (
                        <Buoy key={location.buoy.id} locationData={location} focus={focusBuoy} />
                    ))}
                </ScrollView>
            </View>
        </>
    );
}