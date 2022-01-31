import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/global';

export const PageTitle = ({content}) => {
  const renderVerticalCard = () => {
    return content.map((er, id) => {
      return (
        <View key={id} style={styles.verticalContainer}>
          <View style={styles.verticalCard}>
            {renderVerticalText(er.toLowerCase())}
          </View>
        </View>
      );
    });
  };
  const renderVerticalText = text => {
    let textRaw = text.split('');

    return textRaw.map((el, id) => {
      return (
        <Text key={id} style={styles.verticalText}>
          {el}
        </Text>
      );
    });
  };
  return <View style={styles.leftHeader}>{renderVerticalCard()}</View>;
};
