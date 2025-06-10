import DefaultPagesProps from '../types/DefaultPagesProps.type';

import React, { useEffect, useRef, useState } from 'react';
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
import { clearHistory, setFilter0, setFilter15, setFilter3, setFilter7 } from '../store/slices/map';
import removeDays from '../utils/removeDays';
import AddBuoyModal from '../components/AddBuoyModal.component';

export default function HomeScreen({ navigation }: DefaultPagesProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const {
        locations,
        locationsHistory,
        filterDays,
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
        const startDate = removeDays(new Date(), filterDays);
        console.log(startDate)
        const endDate = new Date().toUTCString();
        dispatch(getLocationHistory({ buoyId: buoy.buoy.id, startDate, endDate }));
    }

    return (
        <>
  <AddBuoyModal
    visible={isModalVisible}
    onClose={() => setIsModalVisible(false)}
    onCreated={() => {
      dispatch(getBuoys()); // atualiza lista
      setIsModalVisible(false); // fecha modal
    }}
  />
  <Header navigation={navigation} />
  <View style={styles.main}>
    <View style={styles.mapContainer}>
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
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
        ]}
      >
        {locations.map((location) => (
          <Marker
            key={location.buoy.id}
            coordinate={location}
            title={location.buoy.name}
            description={location.buoy.description}
            style={{
              zIndex: 2,
              opacity: !location.buoy.isDeleted ? 1 : 0.5,
            }}
            icon={
              !location.buoy.isDeleted
                ? require("../assets/ativo.png")
                : require("../assets/inativo.png")
            }
            onPress={() => focusBuoy(location)}
          />
        ))}
        {locationsHistory && (
          <Polyline
            coordinates={locationsHistory}
            strokeColor="red"
            strokeWidth={2}
          />
        )}
      </MapView>
    </View>

    <Text style={styles.textos}>Visualizar rastros</Text>

    <View style={styles.filters}>
      <View style={styles.dateSelect}>
        <Pressable
          onPress={() => dispatch(setFilter0())}
          style={({ pressed }) => [
            filterDays === 0 ? styles.filterSelected : styles.filter,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Text
            style={[
              styles.filterText,
              filterDays === 0 && styles.filterTextSelected,
            ]}
          >
            Hoje
          </Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(setFilter3())}
          style={({ pressed }) => [
            filterDays === 3 ? styles.filterSelected : styles.filter,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Text
            style={[
              styles.filterText,
              filterDays === 3 && styles.filterTextSelected,
            ]}
          >
            3d
          </Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(setFilter7())}
          style={({ pressed }) => [
            filterDays === 7 ? styles.filterSelected : styles.filter,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Text
            style={[
              styles.filterText,
              filterDays === 7 && styles.filterTextSelected,
            ]}
          >
            7d
          </Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(setFilter15())}
          style={({ pressed }) => [
            filterDays === 15 ? styles.filterSelected : styles.filter,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Text
            style={[
              styles.filterText,
              filterDays === 15 && styles.filterTextSelected,
            ]}
          >
            15d
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => dispatch(clearHistory())}
        style={({ pressed }) => [
          styles.clearHistory,
          { opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <Image
          source={require("../assets/close.png")}
          style={styles.image}
        />
      </Pressable>

      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={({ pressed }) => [
          styles.add,
          { opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <Image
          source={require("../assets/add.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </Pressable>
    </View>

    <Text style={styles.textos}>Bóias</Text>

    <ScrollView
      style={styles.buoys}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      {locations.map((location) => (
        <BuoyComponent
          key={location.buoy.id}
          navigation={navigation}
          locationData={location}
          focus={focusBuoy}
        />
      ))}
    </ScrollView>
  </View>
</>
    );
}