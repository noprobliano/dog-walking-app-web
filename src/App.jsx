import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <AuthProvider>
      <AnalyticsProvider>
        <RewardsProvider>
          <ContextProvider>
            <Router>
              <div className="container">
                <Routes>
                  <Route path="/auth" element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/main" element={<BottomTabNavigator />} />
                  <Route path="/walk" element={<WalkScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                  <Route path="/analytics" element={<AnalyticsScreen />} />
                  <Route path="/chat" element={<ChatScreen />} />
                  <Route path="/payment" element={<PaymentScreen />} />
                  <Route path="/rewards" element={<RewardsScreen />} />
                  <Route path="/rewards-store" element={<RewardsStoreScreen />} />
                  <Route path="/media-upload" element={<MediaUploadScreen />} />
                  <Route path="/pet-health" element={<PetHealthDashboardScreen />} />
                  <Route path="/community-groups" element={<CommunityGroupsScreen />} />
                  <Route path="/loyalty-program" element={<LoyaltyProgramScreen />} />
                  <Route path="/marketing" element={<MarketingCampaignsScreen />} />
                  <Route path="/feed" element={<FeedScreen />} />
                  <Route path="/create-post" element={<CreatePostScreen />} />
                  <Route path="/comments" element={<CommentsScreen />} />
                  <Route path="/book-walker" element={<BookWalkerScreen />} />
                  <Route path="/message-owner" element={<MessageOwnerScreen />} />
                  <Route path="/verification" element={<VerificationScreen />} />
                  <Route path="/verification-status" element={<VerificationStatusScreen />} />
                  <Route path="/verification-benefits" element={<VerificationBenefitsScreen />} />
                </Routes>
              </div>
            </Router>
          </ContextProvider>
        </RewardsProvider>
      </AnalyticsProvider>
    </AuthProvider>
  );
}

export default App;
