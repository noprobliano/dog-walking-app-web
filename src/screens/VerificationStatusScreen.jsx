import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const VerificationStatusScreen = () => {
  const verificationStatus = {
    email: {
      verified: true,
      timestamp: '2024-06-08T20:28:55-04:00'},
    phone: {
      verified: false,
      lastAttempt: '2024-06-08T19:30:00-04:00'},
    document: {
      verified: false,
      lastAttempt: null},
    backgroundCheck: {
      verified: false,
      status: 'pending',
      lastUpdate: '2024-06-08T19:00:00-04:00'}};

  return (
    <div className="container">
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <CustomIcon name="check-circle" size={64} color="#007AFF" />
          <Text style={styles.title}>Verification Status</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Email Verification</Text>
          <View style={styles.statusItem}>
            <Icon
              name={verificationStatus.email.verified ? "check-circle" : "circle"}
              size={24}
              color={verificationStatus.email.verified ? "#007AFF" : "#666"}
            />
            <Text style={styles.statusText}>
              {verificationStatus.email.verified
                ? "Verified on " + new Date(verificationStatus.email.timestamp).toLocaleDateString()
                : "Not verified"}
            </Text>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Phone Verification</Text>
          <View style={styles.statusItem}>
            <Icon
              name={verificationStatus.phone.verified ? "check-circle" : "circle"}
              size={24}
              color={verificationStatus.phone.verified ? "#007AFF" : "#666"}
            />
            <Text style={styles.statusText}>
              {verificationStatus.phone.verified
                ? "Verified"
                : verificationStatus.phone.lastAttempt
                ? "Last attempt: " +
                  new Date(verificationStatus.phone.lastAttempt).toLocaleDateString()
                : "Not verified"}
            </Text>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={() => {
                // Navigate to phone verification
              }}
            >
              <Text style={styles.verifyButtonText}>Verify Phone</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Document Verification</Text>
          <View style={styles.statusItem}>
            <Icon
              name={verificationStatus.document.verified ? "check-circle" : "circle"}
              size={24}
              color={verificationStatus.document.verified ? "#007AFF" : "#666"}
            />
            <Text style={styles.statusText}>
              {verificationStatus.document.verified
                ? "Verified"
                : verificationStatus.document.lastAttempt
                ? "Last attempt: " +
                  new Date(verificationStatus.document.lastAttempt).toLocaleDateString()
                : "Not verified"}
            </Text>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={() => {
                // Navigate to document upload
              }}
            >
              <Text style={styles.verifyButtonText}>Upload Document</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Background Check</Text>
          <View style={styles.statusItem}>
            <Icon
              name={verificationStatus.backgroundCheck.verified ? "check-circle" : "circle"}
              size={24}
              color={verificationStatus.backgroundCheck.verified ? "#007AFF" : "#666"}
            />
            <Text style={styles.statusText}>
              {verificationStatus.backgroundCheck.verified
                ? "Verified"
                : verificationStatus.backgroundCheck.status === "pending"
                ? "Pending since " +
                  new Date(verificationStatus.backgroundCheck.lastUpdate).toLocaleDateString()
                : "Not started"}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            // Navigate to next screen
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
    marginBottom: 48},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#007AFF'},
  statusContainer: {
    marginBottom: 24},
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12},
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16},
  statusText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16},
  verifyButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 8,
    marginLeft: 12},
  verifyButtonText: {
    color: '#fff',
    fontSize: 14},
  continueButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24},
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'}});

export default VerificationStatusScreen;
