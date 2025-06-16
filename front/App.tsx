import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash.screen';
import Login from './screens/Login.screen';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Cadastro from './screens/Cadastro.screen';
import DrawerRoutes from './routes/DrawerRoutes';
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, gestureEnabled: true }} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={DrawerRoutes} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}