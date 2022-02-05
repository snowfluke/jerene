import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';
import Quote from '../locals/quotes.json';
import {storeData, getData} from '../utils/LocalStorage.js';

export const Home = ({route, navigation}) => {
  const [todayQuote, setTodayQuote] = useState({});
  const parameters = route.params;

  const getAllQuotes = async () => {
    const customed = (await getData('customed')) || [];
    return [...customed, ...Quote];
  };

  const getRandomQuote = async () => {
    try {
      const Q = await getAllQuotes();
      if (parameters) {
        return setTodayQuote(Q.find(el => el.id == parameters.id));
      }

      let i = Math.floor(Math.random() * Quote.length);
      setTodayQuote(Q[i]);
    } catch (e) {
      console.log(e.message);
    }
  };

  const setFavorite = async quote => {
    let prev = (await getData('favorited')) || [
      {
        quote:
          'Berpikirlah dari belakang, nilai dari kehidupan adalah bagaimana caranya berakhir',
        author: 'Awal Ariansyah',
        tags: ['kehidupan', 'motivasi'],
        id: 69,
      },
    ];

    let prevMap = prev.map(el => el.id);
    if (prevMap.includes(quote.id))
      return ToastAndroid.show('Sudah ditambahkan', ToastAndroid.SHORT);

    prev.push(quote);
    await storeData('favorited', prev);
    ToastAndroid.show('♥ Ditambahkan ke favorit', ToastAndroid.SHORT);
  };

  useEffect(() => {
    getRandomQuote();
  }, [parameters]);

  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={todayQuote?.tags || []} />
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <View style={styles.container}>
            <View style={styles.quoteHomeBox}>
              <Text style={styles.quoteHomeBoxText}>
                "{'\n'}
                {todayQuote.quote}
              </Text>
            </View>
            <View style={styles.quoteHomeBoxAuthor}>
              <Text style={styles.quoteHomeBoxAuthorText}>
                {todayQuote.author}
              </Text>
            </View>
            <View style={styles.bbl}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => setFavorite(todayQuote)}>
                <Text style={styles.boxText}>❤</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                onPress={() => getRandomQuote()}>
                <Text style={styles.boxText}>🔁</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.line}></TouchableOpacity>
            </View>
          </View>

          <Image
            width={150}
            height={150}
            style={{width: 150, height: 150, alignSelf: 'center'}}
            source={require('../assets/logo.png')}
          />
        </View>
      </ScrollView>
    </>
  );
};
