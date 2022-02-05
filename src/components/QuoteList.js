import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../styles/global';

export const QuoteList = ({navigation, quote, qid}) => {
  return (
    <TouchableOpacity
      style={styles.quoteList}
      onPress={() => navigation.navigate('🏠 Home', {id: qid})}>
      <Text style={styles.quoteListText}>{quote.substring(0, 50)}..."</Text>
    </TouchableOpacity>
  );
};
