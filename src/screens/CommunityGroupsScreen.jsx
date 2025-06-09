import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const CommunityGroupsScreen = () => {
  const groups = [
    {
      id: 1,
      name: 'Downtown Dog Walkers',
      location: 'Downtown',
      members: 125,
      description: 'Join us for daily walks in the downtown area!',
      image: 'https://via.placeholder.com/300'},
    {
      id: 2,
      name: 'Park Pals',
      location: 'Central Park',
      members: 87,
      description: 'Weekly meetups at Central Park for dog walks and socializing.',
      image: 'https://via.placeholder.com/300'},
    {
      id: 3,
      name: 'Beach Buds',
      location: 'Oceanfront',
      members: 65,
      description: 'Morning walks along the beach with your furry friends.',
      image: 'https://via.placeholder.com/300'},
  ];

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Community Groups</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchButton}>
            <CustomIcon name="search" size={20} color="#666" />
            <Text style={styles.searchText}>Search groups...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupsContainer}>
          {groups.map((group) => (
            <TouchableOpacity
              key={group.id}
              style={styles.groupCard}
              onPress={() => {
                // Navigate to group details
              }}
            >
              <Image
                source={{ uri: group.image }}
                style={styles.groupImage}
              />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.groupLocation}>
                  <CustomIcon name="map-pin" size={16} color="#666" />
                  {group.location}
                </Text>
                <View style={styles.groupStats}>
                  <View style={styles.statItem}>
                    <CustomIcon name="users" size={16} color="#666" />
                    <Text style={styles.statValue}>{group.members} members</Text>
                  </View>
                  <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>Join</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.groupDescription}>{group.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.createGroupButton}>
          <Ionicons name="plus-circle" size={24} color="#007AFF" />
          <Text style={styles.createGroupText}>Create New Group</Text>
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
  searchContainer: {
    marginBottom: 16},
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12},
  searchText: {
    marginLeft: 8,
    color: '#666'},
  groupsContainer: {
    marginBottom: 24},
  groupCard: {
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
  groupImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12},
  groupInfo: {
    flex: 1},
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8},
  groupLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8},
  groupStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8},
  statItem: {
    flexDirection: 'row',
    alignItems: 'center'},
  statValue: {
    marginLeft: 4,
    color: '#666'},
  joinButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 8},
  joinButtonText: {
    color: '#fff'},
  groupDescription: {
    fontSize: 14,
    color: '#666'},
  createGroupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16},
  createGroupText: {
    marginLeft: 8,
    color: '#007AFF',
    fontWeight: 'bold'}});

export default CommunityGroupsScreen;
