import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';

interface MediaFile {
  uri: string;
  name: string;
  type: string;
}

interface MediaItem {
  id: string;
  url: string;
  type: string;
  timestamp: Date;
  filename: string;
}

const mediaService = {
  uploadMedia: async (file: MediaFile, walkId: string, type: string): Promise<string> => {
    try {
      if (!file.uri || !file.name) {
        throw new Error('Invalid file object');
      }

      // Create a reference to the storage location
      const reference = storage().ref(`walks/${walkId}/${type}/${Date.now()}`);

      // Upload the file
      const uploadTask = reference.putFile(file.uri);

      // Listen for state changes, errors, and completion
      const progress = (snapshot) => {
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progressPercent.toFixed(1)}% done`);
      };

      const handleSuccess = async () => {
        const url = await uploadTask.snapshot.ref.getDownloadURL();
        
        // Save to Firestore
        await firestore()
          .collection('walks')
          .doc(walkId)
          .collection('media')
          .add({
            url,
            type,
            timestamp: firestore.FieldValue.serverTimestamp(),
            filename: file.name,
          });

        return url;
      };

      const handleError = (error: Error) => {
        console.error('Upload error:', error);
        throw error;
      };

      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', progress, handleError, async () => {
          try {
            const result = await handleSuccess();
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      });
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    }
  },

  getWalkMedia: async (walkId: string): Promise<MediaItem[]> => {
    try {
      const mediaSnapshot = await firestore()
        .collection('walks')
        .doc(walkId)
        .collection('media')
        .orderBy('timestamp', 'desc')
        .get();

      return mediaSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date()
      }));
    } catch (error) {
      console.error('Failed to fetch media:', error);
      throw error;
    }
  },

  deleteMedia: async (walkId: string, mediaId: string): Promise<void> => {
    try {
      // Get media data
      const mediaDoc = await firestore()
        .collection('walks')
        .doc(walkId)
        .collection('media')
        .doc(mediaId)
        .get();

      if (!mediaDoc.exists) {
        throw new Error('Media not found');
      }

      const mediaData = mediaDoc.data();
      
      if (!mediaData?.url) {
        throw new Error('Invalid media data');
      }

      // Delete from storage
      const storageRef = storage().refFromURL(mediaData.url);
      await storageRef.delete();

      // Delete from Firestore
      await firestore()
        .collection('walks')
        .doc(walkId)
        .collection('media')
        .doc(mediaId)
        .delete();
    } catch (error) {
      console.error('Delete failed:', error);
      throw error;
    }
  },
};

export default mediaService;
