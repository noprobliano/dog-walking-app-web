import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native-web';
import CustomIcon from "./components/CustomIcon.jsx";
import { theme } from './theme/theme';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { AnalyticsContext, AnalyticsProvider } from './context/AnalyticsContext';
import { RewardsContext, RewardsProvider } from './context/RewardsContext';
import { ContextProvider } from './context/ContextProvider';

// Screens
import HomeScreen from './screens/HomeScreen';
import WalkScreen from './screens/WalkScreen';
import ProfileScreen from './screens/ProfileScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ChatScreen from './screens/ChatScreen';
import PaymentScreen from './screens/PaymentScreen';
import RewardsScreen from './screens/RewardsScreen';
import RewardsStoreScreen from './screens/RewardsStoreScreen';
import MediaUploadScreen from './screens/MediaUploadScreen';
import FeaturesTabNavigator from './navigation/FeaturesTabNavigator';
import PetHealthDashboardScreen from './screens/PetHealthDashboardScreen';
import CommunityGroupsScreen from './screens/CommunityGroupsScreen';
import LoyaltyProgramScreen from './screens/LoyaltyProgramScreen';
import MarketingCampaignsScreen from './screens/MarketingCampaignsScreen';
import FeedScreen from './screens/FeedScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import CommentsScreen from './screens/CommentsScreen';
import BookWalkerScreen from './screens/BookWalkerScreen';
import MessageOwnerScreen from './screens/MessageOwnerScreen';
import VerificationScreen from './screens/VerificationScreen';
import VerificationStatusScreen from './screens/VerificationStatusScreen';
import VerificationBenefitsScreen from './screens/VerificationBenefitsScreen';

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.backgroundLight,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleStyle: {
    color: theme.colors.primary,
  },
  headerBackImage: () => (
    <CustomIcon name="arrow-back" size={24} color={theme.colors.backgroundLight} />
  ),
  headerBackImageStyle: {
    width: 24,
    height: 24,
  },
  headerLeftContainerStyle: {
    marginLeft: 10,
  },
};

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
              <div className="container">
                <Stack.Navigator 
                  initialRouteName="Auth" 
                  screenOptions={defaultScreenOptions}
                >
                  <Stack.Screen 
                    name="Auth" 
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                  />
                  <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen}
                    options={{ title: 'Register' }}
                  />
                  <Stack.Screen 
                    name="Main" 
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen 
                    name="Walk" 
                    component={WalkScreen}
                    options={{ title: 'Walk Your Dog' }}
                  />
                  <Stack.Screen 
                    name="Chat" 
                    component={ChatScreen}
                    options={{ title: 'Chat' }}
                  />
                  <Stack.Screen 
                    name="Payment" 
                    component={PaymentScreen}
                    options={{ title: 'Payment' }}
                  />
                  <Stack.Screen 
                    name="Rewards" 
                    component={RewardsScreen}
                    options={{ title: 'Rewards' }}
                  />
                  <Stack.Screen 
                    name="RewardsStore" 
                    component={RewardsStoreScreen}
                    options={{ title: 'Rewards Store' }}
                  />
                  <Stack.Screen 
                    name="MediaUpload" 
                    component={MediaUploadScreen}
                    options={{ title: 'Upload Media' }}
                  />
                  <Stack.Screen 
                    name="PetHealth" 
                    component={PetHealthDashboardScreen}
                    options={{ title: 'Pet Health' }}
                  />
                  <Stack.Screen 
                    name="CommunityGroups" 
                    component={CommunityGroupsScreen}
                    options={{ title: 'Community Groups' }}
                  />
                  <Stack.Screen 
                    name="LoyaltyProgram" 
                    component={LoyaltyProgramScreen}
                    options={{ title: 'Loyalty Program' }}
                  />
                  <Stack.Screen 
                    name="MarketingCampaigns" 
                    component={MarketingCampaignsScreen}
                    options={{ title: 'Marketing Campaigns' }}
                  />
                  <Stack.Screen 
                    name="Feed" 
                    component={FeedScreen}
                    options={{ title: 'Feed' }}
                  />
                  <Stack.Screen 
                    name="CreatePost" 
                    component={CreatePostScreen}
                    options={{ title: 'Create Post' }}
                  />
                  <Stack.Screen 
                    name="Comments" 
                    component={CommentsScreen}
                    options={{ title: 'Comments' }}
                  />
                  <Stack.Screen 
                    name="BookWalker" 
                    component={BookWalkerScreen}
                    options={{ title: 'Book Walker' }}
                  />
                  <Stack.Screen 
                    name="MessageOwner" 
                    component={MessageOwnerScreen}
                    options={{ title: 'Message Owner' }}
                  />
                  <Stack.Screen 
                    name="Verification" 
                    component={VerificationScreen}
                    options={{ title: 'Verification' }}
                  />
                  <Stack.Screen 
                    name="VerificationStatus" 
                    component={VerificationStatusScreen}
                    options={{ title: 'Verification Status' }}
                  />
                  <Stack.Screen 
                    name="VerificationBenefits" 
                    component={VerificationBenefitsScreen}
                    options={{ title: 'Verification Benefits' }}
                  />
                </Stack.Navigator>
              </div>
            </NavigationContainer>
          </ContextProvider>
        </RewardsProvider>
      </AnalyticsProvider>
    </AuthProvider>
  );
}

export default App;
