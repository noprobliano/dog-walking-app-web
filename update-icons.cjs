const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'MarketingCampaignsScreen.jsx',
  'FeedScreen.jsx',
  'ChatScreen.jsx',
  'CommunityGroupsScreen.jsx',
  'CommentsScreen.jsx',
  'PetHealthDashboardScreen.jsx',
  'VerificationBenefitsScreen.jsx',
  'MessageOwnerScreen.jsx',
  'VerificationStatusScreen.jsx',
  'RewardsScreen.jsx',
  'PaymentScreen.jsx',
  'VerificationScreen.jsx',
  'MediaUploadScreen.jsx',
  'LoyaltyProgramScreen.jsx',
  'ProfileScreen.jsx',
  'CreatePostScreen.jsx',
  'RewardsStoreScreen.jsx',
  'BookWalkerScreen.jsx',
  'auth/RegisterScreen.jsx',
  'auth/LoginScreen.jsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, 'src/screens', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/import { Ionicons } from 'react-native-web';/g, 'import Ionicons from "react-native-web-icons/Ionicons";');
    content = content.replace(/import { Ionicons, Icon } from 'react-native-web';/g, 'import Ionicons from "react-native-web-icons/Ionicons";');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
