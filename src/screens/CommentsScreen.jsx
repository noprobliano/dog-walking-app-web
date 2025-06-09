import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const CommentsScreen = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: {
        name: 'John Walker',
        avatar: 'https://via.placeholder.com/40'},
      text: 'Great walk! My dog loved the new trail.',
      timestamp: '2 hours ago',
      likes: 5},
    {
      id: 2,
      user: {
        name: 'Sarah Paws',
        avatar: 'https://via.placeholder.com/40'},
      text: 'I agree! The views were amazing!',
      timestamp: '1 hour ago',
      likes: 3},
  ]);

  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  const handleComment = async () => {
    if (!newComment.trim()) {
      setError('Please write a comment');
      return;
    }

    try {
      setError('');
      // In a real app, this would make an API call to create the comment
      const newCommentId = Date.now();
      setComments([
        {
          id: newCommentId,
          user: {
            name: 'Your Name',
            avatar: 'https://via.placeholder.com/40'},
          text: newComment,
          timestamp: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'}),
          likes: 0},
        ...comments,
      ]);
      setNewComment('');
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    }
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Comments</Text>
      </View>

      <ScrollView style={styles.content}>
        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <View style={styles.commentsContainer}>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.commentCard}>
              <View style={styles.commentHeader}>
                <Image
                  source={{ uri: comment.user.avatar }}
                  style={styles.avatar}
                />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{comment.user.name}</Text>
                  <Text style={styles.timestamp}>{comment.timestamp}</Text>
                </View>
                <TouchableOpacity style={styles.likeButton}>
                  <CustomIcon name="heart" size={20} color="#666" />
                  <Text style={styles.likeCount}>{comment.likes}</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.commentText}>{comment.text}</Text>

              <View style={styles.commentDivider} />
            </View>
          ))}
        </View>

        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment..."
            value={newComment}
            onChangeText={setNewComment}
            multiline
            numberOfLines={3}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleComment}
            disabled={!newComment.trim()}
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
  commentsContainer: {
    marginBottom: 24},
  commentCard: {
    backgroundColor: '#fff',
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
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12},
  userInfo: {
    flex: 1},
  userName: {
    fontSize: 16,
    fontWeight: 'bold'},
  timestamp: {
    color: '#666',
    marginTop: 4},
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center'},
  likeCount: {
    marginLeft: 4,
    color: '#666'},
  commentText: {
    fontSize: 16,
    color: '#333'},
  commentDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 12,
    marginBottom: 16},
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12},
  commentInput: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
    marginRight: 12,
    fontSize: 16},
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    padding: 12}});

export default CommentsScreen;
