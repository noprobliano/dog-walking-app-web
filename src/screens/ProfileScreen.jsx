import React from 'react';
import { View, Text, StyleSheet } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";
import { useAuth } from '../context/AuthContext';
import { useAnalytics } from '../context/AnalyticsContext';
import { useContextProvider } from '../context/ContextProvider';

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const { analyticsData } = useAnalytics();
  const { appState } = useContextProvider();

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <CustomIcon name="user" size={48} color="#007AFF" />
            <Text style={styles.profileName}>{user?.name || 'Guest'}</Text>
          </View>

          <View style={styles.profileStats}>
            <View style={styles.statItem}>
              <CustomIcon name="map-pin" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Total Walks</Text>
              <Text style={styles.statValue}>{analyticsData.totalWalks}</Text>
            </View>
            <View style={styles.statItem}>
              <CustomIcon name="map" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Total Distance</Text>
              <Text style={styles.statValue}>{analyticsData.totalDistance.toFixed(1)} km</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="clock" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Total Time</Text>
              <Text style={styles.statValue}>{Math.floor(analyticsData.totalDuration / 60)} min</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="trending-up" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Average Speed</Text>
              <Text style={styles.statValue}>{analyticsData.averageSpeed.toFixed(1)} km/h</Text>
            </View>
          </View>

          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Settings</Text>
            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                useContextProvider().toggleTheme();
              }}
            >
              <Ionicons name="sun" size={24} color={appState.theme === 'light' ? '#007AFF' : '#FF0000'} />
              <Text style={styles.settingText}>Dark Mode</Text>
              <Icon name={appState.theme === 'light' ? 'moon' : 'sun'} size={24} color="#007AFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                useContextProvider().toggleNotifications();
              }}
            >
              <Ionicons name="bell" size={24} color={appState.notificationsEnabled ? '#007AFF' : '#666'} />
              <Text style={styles.settingText}>Notifications</Text>
              <Icon name={appState.notificationsEnabled ? 'check-circle' : 'circle'} size={24} color="#007AFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                useContextProvider().toggleSound();
              }}
            >
              <Ionicons name="volume-2" size={24} color={appState.soundEnabled ? '#007AFF' : '#666'} />
              <Text style={styles.settingText}>Sound</Text>
              <Icon name={appState.soundEnabled ? 'check-circle' : 'circle'} size={24} color="#007AFF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={logout}
          >
            <Ionicons name="log-out" size={24} color="#FF0000" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4},
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24},
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16},
  profileStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 24},
  statItem: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 8,
    width: '45%'},
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4},
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF'},
  settingsSection: {
    marginTop: 24},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16},
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'},
  settingText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16},
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 24,
    backgroundColor: '#fff3f3',
    borderRadius: 8},
  logoutText: {
    marginLeft: 16,
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold'}});

export default ProfileScreen;
