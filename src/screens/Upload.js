import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';

export const Upload = ({navigation}) => {
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
                placeholderTextColor={'black'}
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
                multiline={true}
                placeholder="Masukan nama"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.textInputWrapper}>
              <View style={{flex: 0.75}}>
                <TextInput
                  style={[styles.textInput, {marginBottom: 5}]}
                  placeholder="Masukan tag pertama"
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.textInput, {marginTop: 5}]}
                  placeholder="Masukan tag kedua"
                  placeholderTextColor={'black'}
                />
              </View>
              <Text style={[styles.textInputTitle, {flex: 0.25}]}>
                TAG{'\n'}KATE{'\n'}GORI
              </Text>
            </View>
            <View style={styles.bbl}>
              <View style={styles.line}></View>
              <View style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>❌</Text>
              </View>
              <View style={[styles.box, {marginLeft: 10, marginRight: 0}]}>
                <Text style={styles.boxText}>▶</Text>
              </View>
            </View>

            <TextInput
              style={[
                styles.textInput,
                {marginVertical: 20, paddingVertical: 20},
              ]}
              placeholder="Masukan tag baru disini (pisahkan koma)"
              multiline={true}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity style={{width: '100%', marginBottom: 30}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Tambah tag baru
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
