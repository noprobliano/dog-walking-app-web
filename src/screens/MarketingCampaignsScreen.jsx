import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const MarketingCampaignsScreen = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Summer Fun Giveaway',
      description: 'Win a free dog park pass for the summer!',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      status: 'active',
      rewards: [
        'Free dog park pass',
        '10% off in-store purchases',
        'Free water bowl',
      ]},
    {
      id: 2,
      title: 'Walk-a-thon Challenge',
      description: 'Complete 50 walks in a month and win amazing prizes!',
      startDate: '2024-07-01',
      endDate: '2024-07-31',
      status: 'upcoming',
      rewards: [
        'Custom dog bandana',
        '20% off dog food',
        'Free grooming session',
      ]},
    {
      id: 3,
      title: 'Fall Festival',
      description: 'Join us for a fun day of activities and prizes!',
      startDate: '2024-10-01',
      endDate: '2024-10-01',
      status: 'upcoming',
      rewards: [
        'Free festival entry',
        'Dog treats bag',
        'Discount coupons',
      ]},
  ];

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Marketing Campaigns</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <CustomIcon name="filter" size={20} color="#666" />
            <Text style={styles.filterText}>Filter Campaigns</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.campaignsContainer}>
          {campaigns.map((campaign) => (
            <TouchableOpacity
              key={campaign.id}
              style={[
                styles.campaignCard,
                {
                  backgroundColor:
                    campaign.status === 'active'
                      ? '#e3f2fd'
                      : campaign.status === 'upcoming'
                      ? '#f5f5f5'
                      : '#fff'},
              ]}
              onPress={() => {
                // Navigate to campaign details
              }}
            >
              <View style={styles.campaignHeader}>
                <Text style={styles.campaignTitle}>{campaign.title}</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>
                    {campaign.status.toUpperCase()}
                  </Text>
                </View>
              </View>

              <Text style={styles.campaignDescription}>
                {campaign.description}
              </Text>

              <View style={styles.dateContainer}>
                <CustomIcon name="calendar" size={16} color="#666" />
                <Text style={styles.dateText}>
                  {campaign.startDate} - {campaign.endDate}
                </Text>
              </View>

              <View style={styles.rewardsContainer}>
                <Text style={styles.rewardsTitle}>Rewards:</Text>
                {campaign.rewards.map((reward, index) => (
                  <View key={index} style={styles.rewardItem}>
                    <CustomIcon name="gift" size={16} color="#007AFF" />
                    <Text style={styles.rewardText}>{reward}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                style={styles.joinButton}
                onPress={() => {
                  // Handle campaign join
                }}
              >
                <Text style={styles.joinButtonText}>
                  {campaign.status === 'active' ? 'Join Now' : 'Coming Soon'}
                </Text>
              </TouchableOpacity>
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
  filterContainer: {
    marginBottom: 16},
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12},
  filterText: {
    marginLeft: 8,
    color: '#666'},
  campaignsContainer: {
    marginBottom: 24},
  campaignCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4},
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12},
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold'},
  statusBadge: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16},
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'},
  campaignDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12},
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12},
  dateText: {
    marginLeft: 8,
    color: '#666'},
  rewardsContainer: {
    marginBottom: 16},
  rewardsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8},
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4},
  rewardText: {
    marginLeft: 8,
    color: '#666'},
  joinButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center'},
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'}});

export default MarketingCampaignsScreen;
