import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Button from '../../components/Button';
import ImageViewer from '../../components/ImageViewer';
import {Link} from "expo-router";

const PlaceholderImage = require('../../assets/images/splash.png');

function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {/*<TabBarIcon name="upload" color="white" />*/}
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.buttonPadding}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          </View>
          <View style={styles.buttonPadding}>
            <Link href="/routes/result">
          <Button theme="info" label="Use this photo" />
            </Link>
            </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  buttonPadding: {
    paddingTop: 6,
  }
});
