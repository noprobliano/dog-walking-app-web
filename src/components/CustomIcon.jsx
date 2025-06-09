import React from 'react';
import { Text } from 'react-native-web';

const iconMap = {
  'ios-home': '🏠',
  'ios-settings': '⚙️',
  'ios-notifications': '🔔',
  'ios-chatbubbles': '💬',
  'ios-person': '👤',
  'ios-heart': '❤️',
  'ios-star': '⭐',
  'ios-wallet': '💳',
  'ios-calendar': '📅',
  'ios-search': '🔍',
  'ios-add': '+',
  'ios-close': '❌',
  'ios-checkmark': '✅',
  'ios-arrow-forward': '→',
  'ios-arrow-back': '←',
  'ios-arrow-up': '↑',
  'ios-arrow-down': '↓',
  'ios-arrow-left': '←',
  'ios-arrow-right': '→',
  'ios-information-circle': 'ℹ️',
  'ios-help-circle': '❓',
  'ios-alert': '⚠️',
  'ios-checkmark-circle': '✅',
  'ios-close-circle': '❌',
};

const CustomIcon = ({ name, size = 24, color = 'black', style }) => {
  const icon = iconMap[name] || name;
  
  return (
    <Text 
      style={{ 
        fontSize: size,
        color,
        ...style 
      }}
    >
      {icon}
    </Text>
  );
};

export default CustomIcon;
