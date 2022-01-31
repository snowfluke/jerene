import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home';
import {Quote} from './src/screens/Quote';

const QuoteScreen = ({navigation}) => <Quote navigation={navigation} />;
const HomeScreen = ({navigation}) => <Home navigation={navigation} />;
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Quote" component={QuoteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
