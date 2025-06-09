import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from "../components/CustomIcon.jsx";
import WalkScreen from '../screens/WalkScreen';
import RewardsScreen from '../screens/RewardsScreen';
import ChatScreen from '../screens/ChatScreen';
import MediaUploadScreen from '../screens/MediaUploadScreen';

const Tab = createBottomTabNavigator();

const FeaturesTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Walk':
              iconName = focused ? 'play-circle' : 'play';
              break;
            case 'Rewards':
              iconName = focused ? 'award' : 'gift';
              break;
            case 'Chat':
              iconName = focused ? 'message-circle' : 'message-square';
              break;
            case 'Media':
              iconName = focused ? 'image' : 'camera';
              break;
            default:
              iconName = 'help-circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Walk" component={WalkScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Media" component={MediaUploadScreen} />
    </Tab.Navigator>
  );
};

export default FeaturesTabNavigator;
