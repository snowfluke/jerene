import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';

import {CardCategory} from '../components/CardCategory';

export const Category = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['total']} />
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 20}}>
          <View style={styles.container}>
            <CardCategory />
            <CardCategory />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
