import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../styles/global';

export const CardCategory = ({navigation, name, total}) => {
  return (
    <TouchableOpacity style={styles.cardCategory}>
      <View style={styles.cardCategoryTop}>
        <Text style={styles.cardCategoryMiddle}>{total}</Text>
      </View>
      <Text style={styles.cardCategoryBottom}>{name}</Text>
    </TouchableOpacity>
  );
};
