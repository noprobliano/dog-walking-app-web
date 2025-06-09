import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const PaymentScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const cards = [
    {
      id: 1,
      type: 'Visa',
      last4: '1234',
      expiry: '12/25'},
    {
      id: 2,
      type: 'Mastercard',
      last4: '5678',
      expiry: '06/24'},
  ];

  const handlePayment = () => {
    if (!selectedCard || !amount) {
      setError('Please select a card and enter an amount');
      return;
    }

    try {
      // In a real app, this would make a payment API call
      setError('');
      alert('Payment successful!');
    } catch (err) {
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Payment</Text>
      </View>

      <View style={styles.content}>
        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <Text style={styles.sectionTitle}>Amount</Text>
        <View style={styles.amountContainer}>
          <TextInput
            style={styles.input}
            placeholder="$0.00"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.sectionTitle}>Payment Methods</Text>
        <View style={styles.cardsContainer}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={[
                styles.card,
                selectedCard === card.id && styles.cardSelected,
              ]}
              onPress={() => setSelectedCard(card.id)}
            >
              <CustomIcon name="credit-card" size={24} color="#666" />
              <Text style={styles.cardText}>{card.type}</Text>
              <Text style={styles.cardText}>•••• {card.last4}</Text>
              <Text style={styles.cardText}>{card.expiry}</Text>
              {selectedCard === card.id && (
                <CustomIcon name="check" size={24} color="#007AFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.payButton}
          onPress={handlePayment}
          disabled={!selectedCard || !amount}
        >
          <Text style={styles.payButtonText}>Pay ${amount || '0.00'}</Text>
        </TouchableOpacity>
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
  error: {
    color: '#FF0000',
    marginBottom: 16,
    fontSize: 14},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12},
  amountContainer: {
    marginBottom: 24},
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    fontSize: 24},
  cardsContainer: {
    marginBottom: 24},
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12},
  cardSelected: {
    backgroundColor: '#e3f2fd'},
  cardText: {
    marginLeft: 12,
    fontSize: 16},
  payButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24},
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'}});

export default PaymentScreen;
