import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const ExtractedTextScreen = ({navigation}) => {
  const route = useRoute();
  const { imageUri, extractedText } = route.params;

  return (
    <>
    <Header closeX={'x'} close={()=>navigation?.navigate('ListsScreen')}/>
    <View style={styles.container}>
      <View style={styles.imageTextView}>
        <View style={styles.imageView}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.text}>{extractedText}</Text>
    </ScrollView>
    </View>

    <View style={styles.touchableView}>

      <TouchableOpacity style={styles.touchable}>
      <MaterialIcons name="content-copy" size={24} color="#fff" />
      <Text style={styles.touchableText}>Copy</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.touchable}>
      <Feather name="download" size={24} color="#fff" />
      <Text style={styles.touchableText}>Download</Text>
      </TouchableOpacity>
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
  },
  touchableView:{
    flexDirection:'row',
    width:'80%',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:40
  },
  touchable:{
    backgroundColor:'#8145DB',
    width:'48%',
    height:54,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:10,
    borderRadius:10,
  },
  touchableText:{
    fontSize:20,
    color:'#fff',
    fontWeight:'600',
    lineHeight:23.44
  }
});