import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Animated, Easing } from 'react-native';
import { useLayoutEffect, useEffect, useState } from 'react';

export default function Initial({ navigation }: { navigation: any }) {
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const floatAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnim, {
                    toValue: -10,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnim, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <ImageBackground source={require('../assets/fundo.png')} style={styles.background}>
            <Animated.Image
                source={require('../assets/logo-azimuth.png')}
                style={[styles.logo, { transform: [{ translateY: floatAnim }] }]}
            />

            <Text style={styles.title}>Azimuth</Text>
            <Text style={styles.subtitle}>Monitoramento e Análise</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D2942',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        fontSize: 46,
        fontWeight: 'bold',
        fontFamily: 'Inter-Bold',
        color: 'white',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        marginBottom: 60,
    },
    button: {
        backgroundColor: '#7A4DFF',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});