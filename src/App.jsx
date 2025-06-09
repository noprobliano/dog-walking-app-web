import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native-web';
import { theme } from './theme/theme';
import './index.css';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={{
      dark: false,
      colors: {
        primary: theme.colors.primary,
        background: theme.colors.background,
        card: theme.colors.backgroundLight,
        text: theme.colors.text,
        border: theme.colors.border,
        notification: theme.colors.primary,
      }
    }}>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.backgroundLight,
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: theme.colors.text, fontSize: 20 }}>Welcome to Dog Walking App</Text>
            </View>
          )}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
