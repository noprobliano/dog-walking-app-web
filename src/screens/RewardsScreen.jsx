import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";
import { useAnalytics } from '../context/AnalyticsContext';

const RewardsScreen = () => {
  const { analyticsData } = useAnalytics();

  // Calculate rewards based on analytics data
  const totalWalks = analyticsData.totalWalks || 0;
  const totalDistance = analyticsData.totalDistance || 0;
  const rewards = [
    {
      id: 1,
      title: 'Bronze Badge',
      description: 'Complete 10 walks',
      earned: totalWalks >= 10,
      points: 100},
    {
      id: 2,
      title: 'Silver Badge',
      description: 'Complete 50 walks',
      earned: totalWalks >= 50,
      points: 500},
    {
      id: 3,
      title: 'Gold Badge',
      description: 'Complete 100 walks',
      earned: totalWalks >= 100,
      points: 1000},
    {
      id: 4,
      title: 'Distance Explorer',
      description: 'Walk 100km',
      earned: totalDistance >= 100,
      points: 200},
    {
      id: 5,
      title: 'Long Distance',
      description: 'Walk 500km',
      earned: totalDistance >= 500,
      points: 500},
  ];

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Rewards</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <CustomIcon name="map-pin" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Total Walks</Text>
            <Text style={styles.statValue}>{totalWalks}</Text>
          </View>
          <View style={styles.statCard}>
            <CustomIcon name="map" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Total Distance</Text>
            <Text style={styles.statValue}>{totalDistance.toFixed(1)} km</Text>
          </View>
        </View>

        <View style={styles.rewardsContainer}>
          <Text style={styles.rewardsTitle}>Available Rewards</Text>
          {rewards.map((reward) => (
            <TouchableOpacity
              key={reward.id}
              style={[
                styles.rewardCard,
                reward.earned && styles.rewardCardEarned,
              ]}
              disabled={reward.earned}
            >
              <View style={styles.rewardIconContainer}>
                <Icon
                  name={reward.earned ? 'award' : 'lock'}
                  size={32}
                  color={reward.earned ? '#007AFF' : '#666'}
                />
              </View>
              <View style={styles.rewardInfo}>
                <Text style={styles.rewardTitle}>{reward.title}</Text>
                <Text style={styles.rewardDescription}>{reward.description}</Text>
                <Text style={styles.rewardPoints}>
                  {reward.points} points
                </Text>
              </View>
              {reward.earned && (
                <CustomIcon name="check-circle" size={24} color="#007AFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'},
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'},
  title: {
    fontSize: 24,
    fontWeight: 'bold'},
  content: {
    flex: 1,
    padding: 16},
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24},
  statCard: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    width: '45%'},
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4},
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF'},
  rewardsContainer: {
    marginTop: 24},
  rewardsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16},
  rewardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4},
  rewardCardEarned: {
    backgroundColor: '#e3f2fd'},
  rewardIconContainer: {
    marginRight: 16},
  rewardInfo: {
    flex: 1},
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4},
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4},
  rewardPoints: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold'}});

export default RewardsScreen;
