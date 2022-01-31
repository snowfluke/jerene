import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../styles/global';

export const CardCategory = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.cardCategory}
      onPress={() => console.log('debug')}>
      <View style={styles.cardCategoryTop}>
        <Text style={styles.cardCategoryMiddle}>5000</Text>
      </View>
      <Text style={styles.cardCategoryBottom}>Kutipan lokal</Text>
    </TouchableOpacity>
  );
};
