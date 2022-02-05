import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from '../styles/global';
import {Header} from '../components/Header';
import Quote from '../locals/quotes.json';
import {CardCategory} from '../components/CardCategory';
import {getData} from '../utils/LocalStorage';

export const Category = ({navigation}) => {
  const [local, setLocal] = useState(0);
  const [favorit, setFavorit] = useState(0);
  const [custom, setCustom] = useState(0);

  const updateStat = async () => {
    let local = Quote.length;
    const favorited = await getData('favorited');
    const customed = await getData('customed');
    let favorit = favorited?.length || 0;
    let custom = customed?.length || 0;

    setLocal(local);
    setFavorit(favorit);
    setCustom(custom);
  };

  useEffect(() => {
    updateStat();
  }, []);
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={['total']} />
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 20}}>
          <View style={styles.container}>
            <CardCategory name="Kutipan Lokal" total={local} />
            <CardCategory name="Kutipan Favorit" total={favorit} />
            <CardCategory name="Kutipan Pribadi" total={custom} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
