import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home';
import {Category} from './src/screens/Category';
import {Quote} from './src/screens/Quote';
import {Upload} from './src/screens/Upload';
import {Setting} from './src/screens/Setting';

const CategoryScreen = ({navigation}) => <Category navigation={navigation} />;
const QuoteScreen = ({navigation}) => <Quote navigation={navigation} />;
const HomeScreen = ({navigation}) => <Home navigation={navigation} />;
const UploadScreen = ({navigation}) => <Upload navigation={navigation} />;
const SettingScreen = ({navigation}) => <Setting navigation={navigation} />;
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerLabelStyle: {
            fontWeight: 'bold',
            fontFamily: 'Raleway-Medium',
            fontSize: 20,
            color: 'black',
          },
          drawerStyle: {
            backgroundColor: '#fff',
            width: 240,
          },
        }}>
        <Drawer.Screen name="🏠 Home" component={HomeScreen} />
        <Drawer.Screen name="💠 Category" component={CategoryScreen} />
        <Drawer.Screen name="📃 Quote" component={QuoteScreen} />
        <Drawer.Screen name="✍ Upload" component={UploadScreen} />
        <Drawer.Screen name="⚙ Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
