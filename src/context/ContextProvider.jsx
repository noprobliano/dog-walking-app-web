import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    theme: 'light',
    notificationsEnabled: true,
    soundEnabled: true,
  });

  useEffect(() => {
    loadAppState();
  }, []);

  const loadAppState = async () => {
    try {
      const data = await AsyncStorage.getItem('appState');
      if (data) {
        setAppState(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading app state:', error);
    }
  };

  const updateAppState = async (newState) => {
    try {
      const updatedState = {
        ...appState,
        ...newState,
      };
      await AsyncStorage.setItem('appState', JSON.stringify(updatedState));
      setAppState(updatedState);
    } catch (error) {
      console.error('Error updating app state:', error);
    }
  };

  const toggleTheme = () => {
    updateAppState({
      theme: appState.theme === 'light' ? 'dark' : 'light',
    });
  };

  const toggleNotifications = () => {
    updateAppState({
      notificationsEnabled: !appState.notificationsEnabled,
    });
  };

  const toggleSound = () => {
    updateAppState({
      soundEnabled: !appState.soundEnabled,
    });
  };

  const value = {
    appState,
    toggleTheme,
    toggleNotifications,
    toggleSound,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useContextProvider must be used within a ContextProvider');
  }
  return context;
};
