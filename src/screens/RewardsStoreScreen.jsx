import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";
import { theme } from '../theme/theme';
import { useRewards } from '../context/RewardsContext';
import { Alert } from 'react-native-web';

const REWARDS = [
  {
    id: '1',
    name: 'Priority Booking',
    description: 'Skip the queue for 24 hours',
    points: 500,
    image: require('../assets/priority-booking.png')
  },
  {
    id: '2',
    name: '20% Off Coupon',
    description: 'Valid for next 3 walks',
    points: 1000,
    image: require('../assets/discount-coupon.png')
  },
  {
    id: '3',
    name: 'Custom Dog Tag',
    description: 'Personalized with your dog\'s name',
    points: 1500,
    image: require('../assets/dog-tag.png')
  },
  {
    id: '4',
    name: 'Premium Features',
    description: 'Unlock all premium features for 30 days',
    points: 2000,
    image: require('../assets/premium-badge.png')
  }
];

const RewardsStoreScreen = ({ navigation }) => {
  const { points, deductPoints } = useRewards();

  const redeemReward = async (reward) => {
    try {
      if (points < reward.points) {
        Alert.alert('Insufficient Points', 'You need more points to redeem this reward');
        return;
      }
      // Simulate redemption
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Deduct points
      await deductPoints(reward.points);
      Alert.alert('Success!', 'Reward redeemed successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to redeem reward');
    }
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Rewards Store</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{points}</Text>
          <Text style={styles.pointsLabel}>Points Available</Text>
        </View>
      </View>

      <ScrollView style={styles.rewardList}>
        {REWARDS.map((reward) => (
          <TouchableOpacity 
            key={reward.id} 
            style={styles.rewardItem}
            onPress={() => redeemReward(reward)}
            activeOpacity={0.8}
          >
            <Image 
              source={reward.image} 
              style={styles.rewardImage} 
              resizeMode="contain"
            />
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardName}>{reward.name}</Text>
              <Text style={styles.rewardDescription}>{reward.description}</Text>
              <View style={styles.pointsRequired}>
                <Text style={styles.pointsRequiredText}>Points Required:</Text>
                <Text style={styles.pointsRequiredValue}>{reward.points}</Text>
              </View>
              <TouchableOpacity 
                style={[styles.redeemButton, points < reward.points && styles.disabledButton]}
                disabled={points < reward.points}
                onPress={() => redeemReward(reward)}
              >
                <Text style={[styles.redeemButtonText, points < reward.points && styles.disabledButtonText]}>
                  {points < reward.points ? 'Insufficient Points' : 'Redeem'}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background},
  header: {
    backgroundColor: theme.colors.backgroundLight,
    paddingVertical: theme.spacing.large,
    paddingHorizontal: theme.spacing.large,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.border},
  title: {
    fontSize: theme.typography.title.fontSize,
    fontWeight: theme.typography.title.fontWeight,
    color: theme.colors.text},
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.medium},
  pointsText: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.primary,
    marginRight: theme.spacing.small},
  pointsLabel: {
    color: theme.colors.textSecondary,
    fontSize: 16},
  rewardList: {
    padding: theme.spacing.large},
  rewardItem: {
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    ...theme.shadows.small},
  rewardImage: {
    width: 100,
    height: 100,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium},
  rewardInfo: {
    marginBottom: theme.spacing.medium},
  rewardName: {
    fontSize: theme.typography.header.fontSize,
    fontWeight: theme.typography.header.fontWeight,
    color: theme.colors.text},
  rewardDescription: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.body.fontSize,
    marginTop: theme.spacing.small},
  pointsRequired: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.medium},
  pointsRequiredText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.body.fontSize,
    marginRight: theme.spacing.small},
  pointsRequiredValue: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.primary},
  redeemButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    marginTop: theme.spacing.medium,
    ...theme.shadows.small},
  redeemButtonText: {
    color: theme.colors.backgroundLight,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight},
  disabledButton: {
    backgroundColor: theme.colors.disabled}
});

export default RewardsStoreScreen;
