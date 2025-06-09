import React from 'react';
import { View, Text, StyleSheet } from "react-native-web";
import "../App.css";
import Ionicons from '../components/CustomIcon';
import { useAuth } from '../context/AuthContext';
import { useAnalytics } from '../context/AnalyticsContext';

const HomeScreen = () => {
  const { user } = useAuth();
  const { analyticsData } = useAnalytics();

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.greeting}>
          {user ? `Welcome, ${user.name}!` : 'Welcome!'}
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <CustomIcon name="map-pin" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Total Walks</Text>
            <Text style={styles.statValue}>{analyticsData.totalWalks}</Text>
          </View>
          <View style={styles.statCard}>
            <CustomIcon name="map" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Total Distance</Text>
            <Text style={styles.statValue}>{analyticsData.totalDistance.toFixed(1)} km</Text>
          </View>
          <View style={styles.statCard}>
            <CustomIcon name="clock" size={24} color="#007AFF" />
            <Text style={styles.statLabel}>Total Time</Text>
            <Text style={styles.statValue}>{Math.floor(analyticsData.totalDuration / 60)} min</Text>
          </View>
        </View>
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16},
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'},
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16},
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16},
  statCard: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    width: '30%'},
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4},
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF'}});

export default HomeScreen;
