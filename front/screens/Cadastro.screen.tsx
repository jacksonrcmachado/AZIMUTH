import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCreateUser } from '../utils/users/useCreateUser';

export default function Cadastro({ navigation }: { navigation: any }) {
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmSenha, setShowConfirmSenha] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleCadastro = async () => {

    if (!name && !email && !password) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    if (password !== confirmedPassword) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    try {
      const user = {
        name: name,
        email: email,
        password: password,
      };

      const result = await useCreateUser(user);
      if (result === true) {
        return result;
      }

      alert(
        `Usuário ${result!.email}  criado com sucesso! \n`
      );

      // Pode navegar para a tela de login
      navigation.replace("Login");
      


      //? Pode Navegar para a tela de login ou outra tela depois do criar o user
      navigation.replace("Login");

    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/fundo.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              padding: 20,
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>

              <Text style={styles.title}>Cadastro</Text>

              <View style={styles.inlineText}>
                <Text style={styles.grayText}>Já tem uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.replace("Login")}>
                  <Text style={styles.linkText}>Entrar</Text>
                </TouchableOpacity>
              </View>

              <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                keyboardType="email-address"
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Data de Aniversário"
              />
              <TextInput
                style={styles.input}
                placeholder="Número de Telefone"
                keyboardType="phone-pad"
              />

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Criar Senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showSenha}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowSenha(!showSenha)}
                >
                  <Ionicons
                    name={showSenha ? "eye" : "eye-off"}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  styles.inputContainer,
                  { marginBottom: 8 },
                  { marginTop: -20 },
                ]}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar Senha"
                  secureTextEntry={!showConfirmSenha}
                  value={confirmedPassword}
                  onChangeText={setConfirmedPassword}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowConfirmSenha(!showConfirmSenha)}
                >
                  <Ionicons
                    name={showConfirmSenha ? "eye" : "eye-off"}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#1D2942',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        backgroundColor: '#fff',
        padding: 24,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        margin: 5,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    inlineText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    grayText: {
        color: '#888',
        fontSize: 18,
    },
    linkText: {
        color: '#5D5FEF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 14,
        fontSize: 16,
        marginBottom: 20,
        height: 55,
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
      marginBottom: 22,
    },
    eyeButton: {
        position: 'absolute',
        right: 15,
        top: '37%',
        transform: [{ translateY: -12 }],
    },
    button: {
        backgroundColor: '#7A4DFF',
        paddingVertical: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    safeArea: {
        flex: 1,
    },
});