// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenImc from './components/formImc';
import loginForm from './components/loginForm';
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={loginForm}
          option={{ tittle: 'Bem Vindo' }}
        />
        <Stack.Screen
          name="telaImc"
          component={ScreenImc}
          options={{ tittle: 'Calcula seu IMC' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}