import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const FeedScreen = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'John Walker',
        avatar: 'https://via.placeholder.com/50'},
      content: {
        text: 'Had a great walk with my dog today! He loved the new park we discovered.',
        image: 'https://via.placeholder.com/300',
        location: 'Central Park'},
      likes: 25,
      comments: 8,
      timestamp: '2 hours ago'},
    {
      id: 2,
      user: {
        name: 'Sarah Paws',
        avatar: 'https://via.placeholder.com/50'},
      content: {
        text: 'Our dog walking group had a fantastic meetup today! Everyone had a blast.',
        image: 'https://via.placeholder.com/300',
        location: 'Downtown'},
      likes: 42,
      comments: 15,
      timestamp: '4 hours ago'},
    {
      id: 3,
      user: {
        name: 'Mike Tail',
        avatar: 'https://via.placeholder.com/50'},
      content: {
        text: 'Just got back from a long hike with my furry friend. What a beautiful day!',
        image: 'https://via.placeholder.com/300',
        location: 'Mountain Trail'},
      likes: 35,
      comments: 10,
      timestamp: '6 hours ago'},
  ];

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Feed</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <CustomIcon name="filter" size={20} color="#666" />
            <Text style={styles.filterText}>Filter Posts</Text>
          </TouchableOpacity>
        </View>

        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <View style={styles.userAvatar}>
                <Image
                  source={{ uri: post.user.avatar }}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{post.user.name}</Text>
                <View style={styles.postLocation}>
                  <CustomIcon name="map-pin" size={16} color="#666" />
                  <Text style={styles.locationText}>{post.content.location}</Text>
                </View>
              </View>
              <Text style={styles.timestamp}>{post.timestamp}</Text>
            </View>

            <Text style={styles.postText}>{post.content.text}</Text>

            {post.content.image && (
              <Image
                source={{ uri: post.content.image }}
                style={styles.postImage}
              />
            )}

            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <CustomIcon name="heart" size={20} color="#666" />
                <Text style={styles.actionText}>{post.likes} likes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="message-square" size={20} color="#666" />
                <Text style={styles.actionText}>{post.comments} comments</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-2" size={20} color="#666" />
                <Text style={styles.actionText}>Share</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.postDivider} />
          </View>
        ))}

        <TouchableOpacity style={styles.createPostButton}>
          <Ionicons name="plus-circle" size={24} color="#007AFF" />
          <Text style={styles.createPostText}>Create Post</Text>
        </TouchableOpacity>
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
  postCard: {
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
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12},
  userAvatar: {
    marginRight: 12},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20},
  userInfo: {
    flex: 1},
  userName: {
    fontSize: 16,
    fontWeight: 'bold'},
  postLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4},
  locationText: {
    marginLeft: 4,
    color: '#666'},
  timestamp: {
    color: '#666'},
  postText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12},
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12},
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12},
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center'},
  actionText: {
    marginLeft: 8,
    color: '#666'},
  postDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee'},
  createPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginTop: 24},
  createPostText: {
    marginLeft: 8,
    color: '#007AFF',
    fontWeight: 'bold'}});

export default FeedScreen;
