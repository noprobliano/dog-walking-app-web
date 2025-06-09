import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const MessageOwnerScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'owner',
      text: 'Hi! I noticed you were interested in my dog walking services.',
      timestamp: '2:30 PM'},
    {
      id: 2,
      sender: 'user',
      text: 'Yes, I am! I need someone to walk my dog on weekdays.',
      timestamp: '2:31 PM'},
    {
      id: 3,
      sender: 'owner',
      text: 'I can definitely help with that! What time works best for you?',
      timestamp: '2:32 PM'},
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!newMessage.trim()) {
      setError('Please write a message');
      return;
    }

    try {
      setError('');
      // In a real app, this would make an API call to send the message
      const newMessageId = Date.now();
      setMessages([
        ...messages,
        {
          id: newMessageId,
          sender: 'user',
          text: newMessage,
          timestamp: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'})},
      ]);
      setNewMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Message Owner</Text>
      </View>

      <ScrollView style={styles.content}>
        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <View style={styles.messagesContainer}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.message,
                message.sender === 'user' && styles.userMessage,
                message.sender === 'owner' && styles.ownerMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={setNewMessage}
            multiline
            numberOfLines={3}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            disabled={!newMessage.trim()}
          >
            <CustomIcon name="send" size={24} color="#007AFF" />
          </TouchableOpacity>
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
  error: {
    color: '#FF0000',
    marginBottom: 16,
    fontSize: 14},
  messagesContainer: {
    marginBottom: 24},
  message: {
    marginBottom: 16,
    maxWidth: '80%'},
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 12},
  ownerMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12},
  messageText: {
    fontSize: 16,
    color: '#000'},
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    alignSelf: 'flex-end'},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12},
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
    marginRight: 12,
    fontSize: 16},
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    padding: 12}});

export default MessageOwnerScreen;
