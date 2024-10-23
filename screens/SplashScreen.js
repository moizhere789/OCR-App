import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SvgTop from '../assets/images/svgtop.svg'
import SvgBottom from '../assets/images/svgbottom.svg'
import Logo from '../assets/images/logo.svg'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation?.navigate('BottomNavigator')
    },1000)
    },[])
    
  return (
    <View style={styles.container}>
      <SvgTop/>
      <View style={styles.logoView}>
        <Logo/>
        <Text style={styles.logoText}>DOC SCANNER</Text>
      </View>
      <SvgBottom/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
    },
    logoView:{
        alignItems:'center',
        gap:15,
    },
    logoText:{
        fontSize:24,
        fontWeight:'700',
        color:'#8145DB',
        lineHeight:27.96
    }
})