import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomIcon from "../components/CustomIcon.jsx";

// Screens
import HomeScreen from '../screens/HomeScreen';
import WalkScreen from '../screens/WalkScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ChatScreen from '../screens/ChatScreen';

const BottomTabNavigator = () => {
  const location = useLocation();
  
  const getIconName = (route) => {
    const routeMap = {
      '/': 'home',
      '/walk': 'map-pin',
      '/analytics': 'bar-chart-2',
      '/profile': 'user',
      '/chat': 'message-circle'
    };
    return routeMap[route] || 'home';
  };

  return (
    <div className="bottom-tabs">
      <nav className="tab-bar">
        <Link to="/" className={`tab ${location.pathname === '/' ? 'active' : ''}`}>
          <CustomIcon name={getIconName('/')} size={24} color={location.pathname === '/' ? '#007AFF' : 'gray'} />
          <span>Home</span>
        </Link>
        <Link to="/walk" className={`tab ${location.pathname === '/walk' ? 'active' : ''}`}>
          <CustomIcon name={getIconName('/walk')} size={24} color={location.pathname === '/walk' ? '#007AFF' : 'gray'} />
          <span>Walk</span>
        </Link>
        <Link to="/analytics" className={`tab ${location.pathname === '/analytics' ? 'active' : ''}`}>
          <CustomIcon name={getIconName('/analytics')} size={24} color={location.pathname === '/analytics' ? '#007AFF' : 'gray'} />
          <span>Analytics</span>
        </Link>
        <Link to="/profile" className={`tab ${location.pathname === '/profile' ? 'active' : ''}`}>
          <CustomIcon name={getIconName('/profile')} size={24} color={location.pathname === '/profile' ? '#007AFF' : 'gray'} />
          <span>Profile</span>
        </Link>
        <Link to="/chat" className={`tab ${location.pathname === '/chat' ? 'active' : ''}`}>
          <CustomIcon name={getIconName('/chat')} size={24} color={location.pathname === '/chat' ? '#007AFF' : 'gray'} />
          <span>Chat</span>
        </Link>
      </nav>
    </div>
  );
};

export default BottomTabNavigator;
