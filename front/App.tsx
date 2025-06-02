import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home.screen';
import Inicial from './screens/Initial.screen';
import Login from './screens/Login.screen';
import Cadastro from './screens/Cadastro.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial'>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,gestureEnabled: true}} />
        <Stack.Screen name="Initial" component={Inicial} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}