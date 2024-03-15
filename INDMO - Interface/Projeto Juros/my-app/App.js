import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenJuros from './components/juros';
import LoginForm from './components/loginForm';
import opcoes from './components/opcao';
import idade from './components/idade';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Provider
    <NavigationContainer>

      {/* Container de navegaçao */}
      <Stack.Navigator>

        {/* Telas */}
        <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ title: 'Bem vindo! ' }} />
            
        <Stack.Screen
            name="telaJuros"
            component={ScreenJuros}
            options={{ title: 'Cálculo Juros' }}
        />

        <Stack.Screen 
          name="Opcoes"
          component={opcoes}
          options={{tittle : 'Opções de Métodos'}}
        />

        <Stack.Screen
          name="Idade"
          component={idade}
          options={{title: 'Cáculo de Idade'}}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

