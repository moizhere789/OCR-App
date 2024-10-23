import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListsScreen from '../screens/ListsScreen';
import CameraScreen from '../screens/CameraScreen';
import HistoryScreen from '../screens/HistoryScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CustomTabButton from '../components/CustomTabButton';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#8145DB',
        tabBarInactiveTintColor: '#858585',
      }}
    >
      <Bottom.Screen
        name="ListsScreen"
        component={ListsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={35} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props}>
              <MaterialCommunityIcons name="line-scan" size={35} color="#fff" />
            </CustomTabButton>
          ),
        }}
      />
      <Bottom.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="history" size={35} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
