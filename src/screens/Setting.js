import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';

export const Setting = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['atur']} />
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <View style={styles.container}>
            <View style={styles.quoteHomeBox}>
              <Text
                style={[
                  styles.quoteHomeBoxText,
                  {textAlign: 'right', fontSize: 30},
                ]}>
                Kami tidak menyediakan fitur pengaturan{'\n\n'}
                Apa yang kamu tulis adalah jati dirimu yang sebenarnya{'\n\n'}
                Memasang aplikasi berarti setuju
              </Text>
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
