import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const VerificationBenefitsScreen = () => {
  const benefits = [
    {
      id: 1,
      icon: 'check-circle',
      title: 'Verified Identity',
      description: 'Your identity is verified for safety and trust'},
    {
      id: 2,
      icon: 'shield',
      title: 'Enhanced Security',
      description: 'Access to premium security features'},
    {
      id: 3,
      icon: 'star',
      title: 'Priority Support',
      description: 'Get faster and better customer support'},
    {
      id: 4,
      icon: 'gift',
      title: 'Exclusive Offers',
      description: 'Access special deals and promotions'},
    {
      id: 5,
      icon: 'users',
      title: 'Community Access',
      description: 'Join verified members-only groups'},
    {
      id: 6,
      icon: 'trending-up',
      title: 'Enhanced Profile',
      description: 'Showcase your verified status'},
  ];

  return (
    <div className="container">
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <CustomIcon name="check-circle" size={64} color="#007AFF" />
          <Text style={styles.title}>Verification Benefits</Text>
        </View>

        <Text style={styles.description}>
          By completing verification, you'll unlock these amazing benefits:
        </Text>

        <ScrollView style={styles.benefitsContainer}>
          {benefits.map((benefit) => (
            <View key={benefit.id} style={styles.benefitCard}>
              <View style={styles.benefitIconContainer}>
                <Icon name={benefit.icon} size={32} color="#007AFF" />
              </View>
              <View style={styles.benefitInfo}>
                <Text style={styles.benefitTitle}>{benefit.title}</Text>
                <Text style={styles.benefitDescription}>{benefit.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.startVerificationButton}
            onPress={() => {
              // Navigate to verification process
            }}
          >
            <Text style={styles.startVerificationText}>Start Verification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => {
              // Navigate to verification details
            }}
          >
            <Text style={styles.learnMoreText}>Learn More</Text>
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
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'},
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#007AFF'},
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24},
  benefitsContainer: {
    marginBottom: 32},
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
  benefitIconContainer: {
    marginRight: 16},
  benefitInfo: {
    flex: 1},
  benefitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8},
  benefitDescription: {
    fontSize: 16,
    color: '#666'},
  actionsContainer: {
    alignItems: 'center'},
  startVerificationButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    marginBottom: 16},
  startVerificationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'},
  learnMoreButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    width: '100%'},
  learnMoreText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center'}});

export default VerificationBenefitsScreen;
