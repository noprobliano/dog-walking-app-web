import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const CreatePostScreen = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');

  const handlePost = async () => {
    if (!text.trim()) {
      setError('Please write something');
      return;
    }

    try {
      setError('');
      // In a real app, this would make an API call to create the post
      alert('Post created successfully!');
    } catch (err) {
      setError('Failed to create post. Please try again.');
    }
  };

  const handleImageSelect = () => {
    // In a real app, this would open the image picker
    setImage('https://via.placeholder.com/300');
  };

  const handleLocationSelect = () => {
    // In a real app, this would open location picker
    setLocation('Current Location');
  };

  const handleTagAdd = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Create Post</Text>
      </View>

      <View style={styles.content}>
        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="What's on your mind?"
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={4}
          />
        </View>

        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.previewImage} />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => setImage(null)}
            >
              <CustomIcon name="x" size={24} color="#FF0000" />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleImageSelect}
        >
          <CustomIcon name="image" size={24} color="#666" />
          <Text style={styles.addButtonText}>Add Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleLocationSelect}
        >
          <CustomIcon name="map-pin" size={24} color="#666" />
          <Text style={styles.addButtonText}>Add Location</Text>
        </TouchableOpacity>

        <View style={styles.tagsContainer}>
          <Text style={styles.sectionTitle}>Tags</Text>
          <View style={styles.tagInputContainer}>
            <TextInput
              style={styles.tagInput}
              placeholder="Add tags..."
              onChangeText={(text) => {
                const newTag = text.trim();
                if (newTag && !text.endsWith(' ')) return;
                if (newTag) handleTagAdd(newTag);
                setText(text.replace(/\s+$/, ''));
              }}
            />
            <View style={styles.tagList}>
              {tags.map((tag) => (
                <TouchableOpacity
                  key={tag}
                  style={styles.tagItem}
                  onPress={() => handleTagRemove(tag)}
                >
                  <Text style={styles.tagText}>{tag}</Text>
                  <Ionicons name="x" size={16} color="#666" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.postButton}
          onPress={handlePost}
          disabled={!text.trim()}
        >
          <Text style={styles.postButtonText}>Post</Text>
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
  inputContainer: {
    marginBottom: 16},
  textInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100},
  imageContainer: {
    position: 'relative',
    marginBottom: 16},
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 8},
  removeImageButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 8},
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16},
  addButtonText: {
    marginLeft: 8,
    color: '#666'},
  tagsContainer: {
    marginBottom: 24},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12},
  tagInputContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12},
  tagInput: {
    backgroundColor: 'transparent',
    padding: 0,
    fontSize: 16},
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8},
  tagItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8},
  tagText: {
    marginRight: 4,
    color: '#007AFF'},
  postButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24},
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'}});

export default CreatePostScreen;
