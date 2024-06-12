
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="login" component={login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

