// LogoffBtn.tsx
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import { resetUser } from '../store/userSlice'; // ajuste conforme seu slice

type RootStackParamList = {
  Login: undefined;
  Initial: undefined;
  Cadastro: undefined;
  Main: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LogoffBtn(props: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  function handleLogout() {
    // dispatch(resetUser()); // ou qualquer ação de logout que você tenha
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  }

  return (
    <View style={styles.container}>
      {/* Conteúdo do Drawer rolável (menus) */}
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingBottom: 80 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Botão fixado na parte inferior */}
      <View style={styles.logoffContainer}>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sair</Text>
            <Ionicons
                name="log-out-outline"
                size={30}
                color="white"
                style={{ transform: [{ scaleX: -1 }], marginRight: 8 }}
            />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoffContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        backgroundColor: '#FF5C5C',
        borderRadius: 10,
        margin: 10,
        marginBottom: 25,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    logoutText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 22,
        paddingLeft: 5
    },
});