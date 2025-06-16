import { StyleSheet, StatusBar, Platform, Button, Text, View, Image, Animated } from "react-native";
import Header from '../components/Header.component';
import { Pressable, TextInput } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';
import { useEffect, useRef, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "../styles/screens/Report.styles"
import formatDate from "../utils/formatDate";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import getBuoys from "../services/asyncThunk/getBuoys";
import BackendConnection from "../services/BackendConnection";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function Report({ navigation }: { navigation: any }) {
    const [selectedBuoy, setSelectedBuoy] = useState("")
    const [initialDate, setInitialDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [showInitialDate, setShowInitialDate] = useState(false)
    const [showEndDate, setShowEndDate] = useState(false)
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch<AppDispatch>()
    const {
        locations
    } = useSelector((state: RootState) => state.maps)

    useEffect(() => {
        dispatch(getBuoys())
    }, [])

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    async function baixarRelatorios() {
        if (isLoading) return
        setIsLoading(true)

        const start = new Date(formatDate(initialDate, false))
        const end = new Date(formatDate(endDate, false))
        end.setDate(end.getDate() + 1)
        end.setHours(20)
        end.setMinutes(59)
        end.setSeconds(59)
        if (selectedBuoy === "") {
            console.log("boia indisponivel")
            return
        }
        const response = await BackendConnection.getLocationHistory(selectedBuoy, start.toISOString(), endDate.toISOString(), false) as { _id: string, boiaId: string, latitude: number, longitude: number, timestamp: string }[]
        if (!response) return
        if (response.length > 0) {
            const csv = "timestamp,latitude,longitude,boiaId\n" + response.map(d => `${d.timestamp},${d.latitude},${d.longitude},${d.boiaId}`).join("\n")
            const path = FileSystem.documentDirectory + "dados.csv";
            await FileSystem.writeAsStringAsync(path, csv, { encoding: FileSystem.EncodingType.UTF8 });
            await Sharing.shareAsync(path);
        }

        setIsLoading(false)
    }

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.main}>
                <Text style={styles.titulo}>Relatórios</Text>
                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Dispositivos</Text>
                    <View style={styles.select}>
                        <Picker
                            selectedValue={selectedBuoy}
                            onValueChange={(itemValue) => setSelectedBuoy(itemValue)}
                            style={selectedBuoy === "" && styles.selectPlaceholder}
                        >
                            {locations ? <Picker.Item label="Selecione um dispositivo" value="" /> : <Picker.Item label="Nenhuma boia encontrada" value="" />}
                            {locations.map((location, index) => <Picker.Item label={location.buoy.name} value={location.buoy.id} key={index} />)}
                        </Picker>
                    </View>
                </View>
                <View style={styles.datas}>
                    <View>
                        <Text style={styles.inputTitle}>De:</Text>
                        <Pressable onPress={() => setShowInitialDate(true)} style={styles.inputData}>
                            {initialDate ? <Text style={styles.inputDataText}>{formatDate(initialDate)}</Text> : <Text style={styles.inputDataTextPlaceholder}>Selecionar data</Text>}
                            <Image source={require("../assets/calendar.png")} style={styles.image} />
                        </Pressable>
                        {showInitialDate && (
                            <DateTimePicker
                                value={initialDate}
                                mode="date"
                                display="default"
                                maximumDate={endDate}
                                onChange={(event, selectedDate) => {
                                    setShowInitialDate(Platform.OS === "ios")
                                    if (selectedDate) setInitialDate(selectedDate)
                                }}
                            />
                        )}
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Até:</Text>
                        <Pressable onPress={() => setShowEndDate(true)} style={styles.inputData}>
                            {endDate ? <Text style={styles.inputDataText}>{formatDate(endDate)}</Text> : <Text style={styles.inputDataTextPlaceholder}>Selecionar data</Text>}
                            <Image source={require("../assets/calendar.png")} style={styles.image} />
                        </Pressable>
                        {showEndDate && (
                            <DateTimePicker
                                value={endDate}
                                mode="date"
                                display="default"
                                minimumDate={initialDate}
                                maximumDate={new Date()}
                                onChange={(event, selectedDate) => {
                                    setShowEndDate(Platform.OS === "ios")
                                    if (selectedDate) setEndDate(selectedDate)
                                }}
                            />
                        )}
                    </View>
                </View>
                <Pressable onPress={baixarRelatorios} style={selectedBuoy === "" ? styles.indisponivel : styles.baixar} >
                    {isLoading ? (
                        <Animated.Image
                            source={require("../assets/loading.png")}
                            style={[styles.image, { transform: [{ rotate: spin }] }]}
                            resizeMode="contain"
                        />
                    ) : (
                        <Text style={styles.baixarText}>Baixar Relatórios</Text>
                    )}
                </Pressable>
            </View>
        </>
    );
}