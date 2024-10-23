import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const HistoryScreen = () => {
  return (
    <>
    <Header menu={'menu'} title={'History'}/>
    <View>
      <Text>HistoryScreen</Text>
    </View>
    </>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})