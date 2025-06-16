// DrawerRoutes.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home.screen';
import Report from '../screens/Report.screen';
import Perfil from '../screens/Perfil.screen';
import LogoffBtn from '../components/LogoffBtn';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerActiveTintColor: '#4B6EF5',
        drawerStyle: {
          width: 280,
        },
        drawerItemStyle: {
          borderRadius: 10,
        },
        drawerLabelStyle: {
          flex: 1,
          textAlign: 'auto',
          paddingLeft: 20,
          fontWeight: '500',
        },
      }}
      drawerContent={(props) => (
        <>
          <LogoffBtn {...props} />
        </>
      )}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Relatórios"
        component={Report}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}