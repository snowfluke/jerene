import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';
import {QuoteList} from '../components/QuoteList';
import Quotes from '../locals/quotes.json';
import {getData} from '../utils/LocalStorage';

export const Quote = ({navigation}) => {
  const [todayQuote, setTodayQuote] = useState({});
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const refInput = useRef('');

  const getAllQuotes = async () => {
    const customed = (await getData('customed')) || [];

    if (customed.length) return [...customed, ...Quotes];

    return Quotes;
  };

  const getRandomQuote = () => {
    let id = Math.floor(Math.random() * Quotes.length);
    setTodayQuote(Quotes[id]);
  };

  const search = async () => {
    if (query.length < 4)
      return ToastAndroid.show('Minimal 4 karakter', ToastAndroid.SHORT);
    const searchObject = await getAllQuotes();
    let res = searchObject.filter(el =>
      el.quote.toLowerCase().includes(query.toLowerCase()),
    );

    setResult(res);
  };

  const renderSearch = () =>
    result.map((el, id) => (
      <QuoteList
        navigation={navigation}
        quote={el.quote}
        key={id}
        qid={el.id}
      />
    ));

  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['cari']} />
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <View style={styles.container}>
            <View style={styles.quoteHomeBox}>
              <View style={styles.quoteHomeBoxAuthor}>
                <Text style={[styles.quoteHomeBoxAuthorText, {fontSize: 18}]}>
                  {todayQuote.author}
                </Text>
              </View>
              <Text
                style={[
                  styles.quoteHomeBoxText,
                  {textAlign: 'right', fontSize: 25},
                ]}>
                {todayQuote.quote}
              </Text>
            </View>
            <View style={[styles.bbl, {marginBottom: 20}]}>
              <TextInput
                placeholder="Cari berdasarkan kata..."
                placeholderTextColor={'#1A1A1A'}
                ref={refInput}
                value={query}
                onChangeText={query => setQuery(query)}
                style={{
                  width: '100%',
                  flex: 1,
                  fontSize: 16,
                  color: 'black',
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              />
              <TouchableOpacity
                onPress={() => setQuery('')}
                style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>❌</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => search()}
                style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>▶</Text>
              </TouchableOpacity>
            </View>
            {renderSearch()}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
