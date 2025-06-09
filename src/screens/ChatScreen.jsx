import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! How can I help you today?",
      isUser: false,
      timestamp: "10:30 AM"},
    {
      id: 2,
      text: "What's the weather like today?",
      isUser: true,
      timestamp: "10:31 AM"},
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'})};

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
      </View>

      <ScrollView style={styles.content}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.isUser ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTimestamp}>{message.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          multiline
          numberOfLines={1}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={!inputText.trim()}
        >
          <CustomIcon name="send" size={24} color="#fff" />
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
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%'},
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 12},
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12},
  messageText: {
    fontSize: 16,
    color: '#000'},
  messageTimestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    alignSelf: 'flex-end'},
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'},
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    padding: 12,
    marginRight: 8,
    fontSize: 16},
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center'}});

export default ChatScreen;
