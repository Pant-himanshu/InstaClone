import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const UploadScreen = ({ route }) => {
  const [videoUri, setVideoUri] = useState(null);
  const navigation = useNavigation();

  const chooseVideo = () => {
    launchImageLibrary({ mediaType: 'video' }, (response) => {
      if (response.assets) {
        setVideoUri(response.assets[0].uri);
      }
    });
  };

  const uploadVideo = () => {
    const { addVideo } = route.params;
    addVideo(videoUri);
    navigation.navigate('Reels');
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Video" onPress={chooseVideo} />
      {videoUri && (
        <View style={styles.previewContainer}>
          <Video
            source={{ uri: videoUri }}
            style={styles.previewVideo}
            controls
          />
          <TouchableOpacity onPress={uploadVideo}>
            <Text style={styles.uploadButton}>Upload</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  previewVideo: {
    width: 300,
    height: 200,
  },
  uploadButton: {
    marginTop: 20,
    color: 'blue',
  },
});

export default UploadScreen;
