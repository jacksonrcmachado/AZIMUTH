import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home.screen';
import Inicial from './screens/Initial.screen';
import Login from './screens/Login.screen';
import ConfigBuoy from './screens/ConfigBuoy.screen';
import Report from './screens/Report.screen';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Cadastro from './screens/Cadastro.screen';
import Toast from "react-native-toast-message";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, gestureEnabled: true }}
          />
          <Stack.Screen name="Initial" component={Inicial} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen
            name="ConfigBuoy"
            component={ConfigBuoy}
            options={{ title: "Configuração do Bóia" }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}