import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../styles/global';

export const QuoteList = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.quoteList}
      onPress={() => console.log('debug')}>
      <Text style={styles.quoteListText}>
        Perjalanan ini terasa sangat menyebalkan"
      </Text>
    </TouchableOpacity>
  );
};
