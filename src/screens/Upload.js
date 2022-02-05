import React, {useState} from 'react';
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
import Quote from '../locals/quotes.json';
import {storeData, getData} from '../utils/LocalStorage.js';

export const Upload = ({navigation}) => {
  const [inputQuote, setInputQuote] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputTag1, setInputTag1] = useState('');
  const [inputTag2, setInputTag2] = useState('');

  const upload = async () => {
    if (inputQuote.length < 20)
      return ToastAndroid.show(
        'Kutipan harus 20-150 karakter',
        ToastAndroid.SHORT,
      );
    if (inputAuthor.length < 3)
      return ToastAndroid.show(
        'Pengarang harus 3-12 karakter',
        ToastAndroid.SHORT,
      );
    if (inputTag1.length < 3)
      return ToastAndroid.show('Tag 1 harus 3-9 karakter', ToastAndroid.SHORT);
    if (inputTag2.length < 3)
      return ToastAndroid.show('Tag 2 harus 3-9 karakter', ToastAndroid.SHORT);

    const customed = (await getData('customed')) || [];
    const index = [...customed, ...Quote].length;

    customed.push({
      quote: inputQuote,
      author: inputAuthor,
      tags: [inputTag1, inputTag2],
      id: index,
    });

    await storeData('customed', customed);
    ToastAndroid.show('Berhasil menambahkan quote baru', ToastAndroid.SHORT);
  };

  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['kustom']} />
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 20}}>
          <View style={styles.container}>
            <View style={styles.textInputWrapper}>
              <TextInput
                style={[styles.textInput, {flex: 0.75}]}
                placeholder="Masukan kutipan disini"
                multiline={true}
                value={inputQuote}
                placeholderTextColor={'black'}
                onChangeText={input => setInputQuote(input)}
                maxLength={150}
              />
              <Text style={[styles.textInputTitle, {flex: 0.25}]}>
                KU{'\n'}TI{'\n'}PAN
              </Text>
            </View>
            <View style={styles.textInputWrapper}>
              <Text
                style={[
                  styles.textInputTitle,
                  {flex: 0.35, textAlign: 'left'},
                ]}>
                PENGA{'\n'}RANG
              </Text>
              <TextInput
                style={[styles.textInput, {flex: 0.65}]}
                value={inputAuthor}
                multiline={true}
                onChangeText={input => setInputAuthor(input)}
                placeholder="Masukan nama"
                placeholderTextColor={'black'}
                maxLength={12}
              />
            </View>
            <View style={styles.textInputWrapper}>
              <View style={{flex: 0.75}}>
                <TextInput
                  style={[styles.textInput, {marginBottom: 5}]}
                  placeholder="Masukan tag pertama"
                  value={inputTag1}
                  onChangeText={input => setInputTag1(input)}
                  placeholderTextColor={'black'}
                  maxLength={9}
                />
                <TextInput
                  style={[styles.textInput, {marginTop: 5}]}
                  placeholder="Masukan tag kedua"
                  onChangeText={input => setInputTag2(input)}
                  value={inputTag2}
                  placeholderTextColor={'black'}
                  maxLength={9}
                />
              </View>
              <Text style={[styles.textInputTitle, {flex: 0.25}]}>
                TAG{'\n'}KATE{'\n'}GORI
              </Text>
            </View>
            <View style={styles.bbl}>
              <View style={styles.line}></View>
              <TouchableOpacity
                onPress={() => {
                  setInputQuote('');
                  setInputAuthor('');
                  setInputTag1('');
                  setInputTag2('');
                }}
                style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>❌</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => upload()}
                style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>▶</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
