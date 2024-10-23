import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CustomTabButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      style={styles.customButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.buttonContent}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabButton;

const styles = StyleSheet.create({
  customButton: {
    top: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#8145DB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
