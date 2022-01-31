import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';

export const Home = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['hidup', 'Mati']} />
        <View style={{flex: 0.8, justifyContent: 'center'}}>
          <View style={styles.container}>
            <View style={styles.quoteHomeBox}>
              <Text style={styles.quoteHomeBoxText}>
                "{'\n'}Berpikirlah dari belakang. Nilai dari kehidupan adalah
                bagaimana caranya berakhir (mati).
              </Text>
            </View>
            <View style={styles.quoteHomeBoxAuthor}>
              <Text style={styles.quoteHomeBoxAuthorText}>Awal Ariansyah</Text>
            </View>
            <View style={styles.bbl}>
              <View style={styles.box}>
                <Text style={styles.boxText}>❤</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxText}>🔁</Text>
              </View>
              <View style={styles.line}></View>
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
