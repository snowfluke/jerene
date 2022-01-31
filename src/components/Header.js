import React from 'react';
import {PageTitle} from './PageTitle';
import {MenuIcon} from './MenuIcon';
import {View} from 'react-native';
import {styles} from '../styles/global';

export const Header = ({navigation, title}) => {
  return (
    <View
      style={{
        flex: 0,
        paddingTop: '5%',
      }}>
      <View style={[styles.container, {flexDirection: 'row'}]}>
        <PageTitle content={title} />
        <MenuIcon navigation={navigation} />
      </View>
    </View>
  );
};
