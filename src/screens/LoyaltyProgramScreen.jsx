import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";
import { useAnalytics } from '../context/AnalyticsContext';

const LoyaltyProgramScreen = () => {
  const { analyticsData } = useAnalytics();

  // Calculate loyalty tier based on analytics data
  const totalWalks = analyticsData.totalWalks || 0;
  const totalDistance = analyticsData.totalDistance || 0;
  const loyaltyTier = calculateLoyaltyTier(totalWalks, totalDistance);

  const tiers = [
    {
      id: 1,
      name: 'Bronze',
      requirements: 'Complete 10 walks',
      benefits: [
        '10% off in-store purchases',
        'Free water bowl',
        'Priority customer support',
      ]},
    {
      id: 2,
      name: 'Silver',
      requirements: 'Complete 50 walks',
      benefits: [
        '20% off in-store purchases',
        'Free dog toy',
        'Priority customer support',
        'Exclusive events',
      ]},
    {
      id: 3,
      name: 'Gold',
      requirements: 'Complete 100 walks',
      benefits: [
        '30% off in-store purchases',
        'Free monthly treat pack',
        'Priority customer support',
        'Exclusive events',
        'Special discounts',
      ]},
  ];

  const calculateLoyaltyTier = (walks, distance) => {
    if (walks >= 100 || distance >= 500) return tiers[2];
    if (walks >= 50 || distance >= 200) return tiers[1];
    return tiers[0];
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Loyalty Program</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.tierCard}>
          <View style={styles.tierIconContainer}>
            <CustomIcon name="award" size={48} color="#007AFF" />
          </View>
          <Text style={styles.tierName}>{loyaltyTier.name} Tier</Text>
          <Text style={styles.tierProgress}>
            {totalWalks} / {loyaltyTier.id === 3 ? '100+' : '50+'} walks
          </Text>
          <Text style={styles.tierProgress}>
            {totalDistance.toFixed(1)} / {loyaltyTier.id === 3 ? '500+' : '200+'} km
          </Text>
        </View>

        <View style={styles.benefitsContainer}>
          <Text style={styles.sectionTitle}>Your Benefits</Text>
          {loyaltyTier.benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <CustomIcon name="check-circle" size={20} color="#007AFF" />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>

        {loyaltyTier.id < 3 && (
          <View style={styles.nextTierContainer}>
            <Text style={styles.sectionTitle}>Next Tier: {tiers[loyaltyTier.id].name}</Text>
            <Text style={styles.nextTierRequirements}>
              {tiers[loyaltyTier.id].requirements}
            </Text>
            <View style={styles.nextTierBenefits}>
              {tiers[loyaltyTier.id].benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <CustomIcon name="circle" size={20} color="#666" />
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Progress to Next Tier</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${progress}%`},
              ]}
            />
          </View>
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
  tierCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4},
  tierIconContainer: {
    alignItems: 'center',
    marginBottom: 16},
  tierName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 8},
  tierProgress: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4},
  benefitsContainer: {
    marginBottom: 24},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16},
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12},
  benefitText: {
    marginLeft: 12,
    fontSize: 16},
  nextTierContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4},
  nextTierRequirements: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16},
  nextTierBenefits: {
    marginTop: 16},
  progressContainer: {
    marginBottom: 24},
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12},
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4},
  progressFill: {
    height: 8,
    backgroundColor: '#007AFF',
    borderRadius: 4}});

export default LoyaltyProgramScreen;
