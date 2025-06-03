import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  Easing
} from 'react-native';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useLogin } from '../utils/users/useLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }: { navigation: any }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const floatAnim = useState(new Animated.Value(0))[0];

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const result = await useLogin(email, password);

      if (!result) return; // erro já tratado

      // ✅ Salvando o token:
      await AsyncStorage.setItem("token", result.token);
      const token = await AsyncStorage.getItem("token");
      console.log("Token salvo:", token);

      
      navigation.replace("Home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login");
    }
  };
  

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 2000,
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
    <ImageBackground
      source={require("../assets/fundo.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <Animated.Image
              source={require("../assets/logo-azimuth.png")}
              style={[styles.logo, { transform: [{ translateY: floatAnim }] }]}
            />
            <Text style={styles.title}>Azimuth</Text>

            <View style={styles.card}>
              <Text style={styles.loginTitle}>Login</Text>
              <Text style={styles.subtitle}>Entre com sua conta</Text>

              <TextInput
                placeholder="exemplo@gmail.com"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="*******"
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>

              <View style={styles.signupRow}>
                <Text style={styles.grayText}>Não possui uma conta? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cadastro")}
                >
                  <Text style={styles.link}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
  },
  title: {
        fontSize: 38,
        fontWeight: 'bold',
        fontFamily: 'Inter-Bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A0A0A',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
    height: 55,
  },
  passwordContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: '35%',
    transform: [{ translateY: -12 }],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#555',
    marginLeft: 6,
    fontSize: 16,
  },
  link: {
    color: '#3972F1',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7A4DFF',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  grayText: {
    color: '#666',
  },
});