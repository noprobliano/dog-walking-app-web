import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const VerificationScreen = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);

  const handleVerify = async () => {
    if (!verificationCode) {
      setError('Please enter verification code');
      return;
    }

    try {
      setError('');
      // In a real app, this would make an API call to verify the code
      if (verificationCode === '1234') {
        // Navigate to next screen
        alert('Verification successful!');
      } else {
        setError('Invalid verification code');
      }
    } catch (err) {
      setError('Failed to verify. Please try again.');
    }
  };

  const handleResend = () => {
    if (resendCountdown > 0) return;

    // In a real app, this would make an API call to resend verification code
    alert('Verification code sent again!');
    setResendCountdown(60);

    const countdownInterval = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="container">
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <CustomIcon name="dog" size={64} color="#007AFF" />
          <Text style={styles.title}>Verification</Text>
        </View>

        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <Text style={styles.description}>
          Enter the verification code sent to your email
        </Text>

        <View style={styles.codeContainer}>
          <TextInput
            style={styles.codeInput}
            placeholder="Enter code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleVerify}
          disabled={!verificationCode}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <TouchableOpacity
            style={[
              styles.resendButton,
              resendCountdown > 0 && styles.resendButtonDisabled,
            ]}
            onPress={handleResend}
            disabled={resendCountdown > 0}
          >
            <Text style={styles.resendButtonText}>
              {resendCountdown > 0
                ? `Resend in ${resendCountdown}s`
                : 'Resend Code'}
            </Text>
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
    marginBottom: 48},
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
  error: {
    color: '#FF0000',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 14},
  codeContainer: {
    marginBottom: 24},
  codeInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    fontSize: 24,
    textAlign: 'center'},
  verifyButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24},
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'},
  resendContainer: {
    alignItems: 'center'},
  resendButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12},
  resendButtonDisabled: {
    backgroundColor: '#ccc'},
  resendButtonText: {
    color: '#666'}});

export default VerificationScreen;
