import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <ContextProvider>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </ContextProvider>
    </NavigationContainer>
  );
}

export default App;