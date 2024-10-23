import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';

const ExtractedTextScreen = () => {
  const route = useRoute();
  const { imageUri, extractedText } = route.params;

  return (
    <>
    <Header closeX={'x'}/>
    <View style={styles.container}>
      <View style={styles.imageTextView}>
        <View style={styles.imageView}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.text}>{extractedText}</Text>
    </ScrollView>
    </View>
    </View>
    </>
  );
};

export default ExtractedTextScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    gap:10,
    paddingTop:30
  },
  scroll:{
    flex:1
  },
  image: {
    width: '30%',
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  imageTextView:{
    backgroundColor:'#ECECEC',
    height:550,
    width:'85%',
    borderRadius:20
  },
  imageView:{
    width:'100%',
    height:180,
    justifyContent:'center',
    alignItems:'center'
  }
});