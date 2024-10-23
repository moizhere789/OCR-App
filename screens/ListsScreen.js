import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ScannerLogo from '../assets/images/scannerlogo.svg'

const ListsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Doc Scanner'} menu={'menu'}/>
    <View style={styles.logoView}>
      <ScannerLogo/>
      <Text style={styles.title}>Detect and extract text from images</Text>
    </View>

    </SafeAreaView>
  )
}

export default ListsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  logoView:{
    flex:1,
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    gap:50
  },
  title:{
    fontSize:28,
    textAlign:'center',
    fontWeight:'600',
    lineHeight:32.81,
    color:'grey'
  }
})