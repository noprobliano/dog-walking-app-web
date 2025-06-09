import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";
import { useAnalytics } from '../context/AnalyticsContext';

const MediaUploadScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  // Simulate image upload
  const handleUpload = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    try {
      setUploading(true);
      setError('');
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would make an API call to upload the image
      alert('Image uploaded successfully!');
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Media Upload</Text>
      </View>

      <View style={styles.content}>
        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <View style={styles.uploadContainer}>
          {selectedImage ? (
            <View style={styles.previewContainer}>
              <Image
                source={{ uri: selectedImage }}
                style={styles.previewImage}
              />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => setSelectedImage(null)}
              >
                <CustomIcon name="x" size={24} color="#FF0000" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => {
                // In a real app, this would open the image picker
                setSelectedImage('https://via.placeholder.com/300');
              }}
            >
              <CustomIcon name="upload" size={48} color="#666" />
              <Text style={styles.uploadButtonText}>Upload Photo</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.actionButton,
            uploading && styles.actionButtonDisabled,
          ]}
          onPress={handleUpload}
          disabled={uploading || !selectedImage}
        >
          {uploading ? (
            <>
              <CustomIcon name="loader" size={24} color="#fff" />
              <Text style={styles.actionButtonText}>Uploading...</Text>
            </>
          ) : (
            <>
              <Ionicons name="upload" size={24} color="#fff" />
              <Text style={styles.actionButtonText}>Upload</Text>
            </>
          )}
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
  uploadContainer: {
    alignItems: 'center',
    marginBottom: 24},
  previewContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden'},
  previewImage: {
    width: '100%',
    height: '100%'},
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 8},
  uploadButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'},
  uploadButtonText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666'},
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    marginTop: 24},
  actionButtonDisabled: {
    backgroundColor: '#ccc'},
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8}});

export default MediaUploadScreen;
