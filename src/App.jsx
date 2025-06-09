import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as AnalyticsProvider } from './context/AnalyticsContext';
import { Provider as RewardsProvider } from './context/RewardsContext';
import { ContextProvider } from './context/ContextProvider';
import { theme } from './theme/theme';
import RewardsStoreScreen from './screens/RewardsStoreScreen';
import './index.css';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <AnalyticsProvider>
        <RewardsProvider>
          <ContextProvider>
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
                initialRouteName="RewardsStore" 
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
                  name="RewardsStore" 
                  component={RewardsStoreScreen}
                  options={{ title: 'Rewards Store' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ContextProvider>
        </RewardsProvider>
      </AnalyticsProvider>
    </AuthProvider>
  );
}

export default App;
