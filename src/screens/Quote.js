import React from 'react';
import {ScrollView, View, Text, Image, TextInput} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';
import {QuoteList} from '../components/QuoteList';

export const Quote = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['lokal']} />
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <View style={styles.container}>
            <View style={styles.quoteHomeBox}>
              <View style={styles.quoteHomeBoxAuthor}>
                <Text style={[styles.quoteHomeBoxAuthorText, {fontSize: 18}]}>
                  Awal Ariansyah
                </Text>
              </View>
              <Text
                style={[
                  styles.quoteHomeBoxText,
                  {textAlign: 'right', fontSize: 25},
                ]}>
                Saya sangat menyukai kerja kelompok.
              </Text>
            </View>
            <View style={[styles.bbl, {marginBottom: 20}]}>
              <TextInput
                placeholder="Cari disini ..."
                placeholderTextColor={'#1A1A1A'}
                style={{
                  width: '100%',
                  flex: 1,
                  fontSize: 16,
                  color: 'black',
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              />
              <View style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>❌</Text>
              </View>
              <View style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>▶</Text>
              </View>
            </View>

            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
            <QuoteList />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
