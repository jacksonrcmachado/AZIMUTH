import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Initial.screen';
import Login from './screens/Login.screen';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Cadastro from './screens/Cadastro.screen';
import DrawerRoutes from './routes/DrawerRoutes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Initial'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, gestureEnabled: true }} />
          <Stack.Screen name="Initial" component={Inicial} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={DrawerRoutes} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}