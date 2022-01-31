import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/global';

export const MenuIcon = ({navigation}) => {
  return (
    <View style={styles.rightHeader}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.threeLine}></View>
        <View style={styles.threeLine}></View>
        <View style={styles.threeLine}></View>
      </TouchableOpacity>
    </View>
  );
};
