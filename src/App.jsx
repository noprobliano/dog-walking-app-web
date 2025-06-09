import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
