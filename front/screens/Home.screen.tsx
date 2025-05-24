import DefaultPagesProps from '../types/DefaultPagesProps.type';
import React from 'react';
import { View, Pressable, Image, ScrollView } from 'react-native';
import styles from '../styles/screens/Home.styles';
import Header from '../components/Header.component';
import Buoy from '../components/Buoy.component';



export default function HomeScreen({ navigation }: DefaultPagesProps) {
    const buoys = [
        {
            id: 1,
            name: "Boia 1",
            state: "active",
            location: {
                latitude: -23.5505,
                longitude: -46.6333,
            },
        },
        {
            id: 2,
            name: "Boia 2",
            state: "maintenance",
            location: {
                latitude: -23.5505,
                longitude: -46.6333,
            },
        },
        {
            id: 3,
            name: "Boia 3",
            state: "inactive",
            location: {
                latitude: -23.5505,
                longitude: -46.6333,
            },
        },
    ]

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.main}>
                <View style={styles.map} />
                <View style={styles.filters}>
                    <Pressable onPress={() => console.log("adicionar boia")} style={styles.add}>
                        <Image source={require("../assets/add.png")} style={{ width: "100%", height: "100%" }} />
                    </Pressable>
                </View>
                <ScrollView style={styles.buoys}>
                    {buoys.map((buoy) => (
                        <Buoy key={buoy.id} buoy={buoy} />
                    ))}
                </ScrollView>
            </View>
        </>
    );
}