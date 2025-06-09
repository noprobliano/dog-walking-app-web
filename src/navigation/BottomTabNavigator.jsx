import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from "../components/CustomIcon.jsx";

// Screens
import HomeScreen from '../screens/HomeScreen';
import WalkScreen from '../screens/WalkScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Walk') {
            iconName = focused ? 'map-pin' : 'map-pin';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'bar-chart-2' : 'bar-chart-2';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'message-circle' : 'message-circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Walk" component={WalkScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
