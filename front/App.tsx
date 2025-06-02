import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home.screen';
import Login from './screens/Login.screen';
import ConfigBuoy from './screens/ConfigBuoy.screen';
import Report from './screens/Report.screen';

import { store } from './store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="ConfigBuoy" component={ConfigBuoy} options={{ title: 'Configuração do Bóia' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}