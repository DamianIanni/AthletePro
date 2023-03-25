/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Day from './src/components/Day';
import ContentDay from './src/components/ContentDay';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const week = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
];


const HomeScreen = () => {
  console.log('HOME')
  const nav = useNavigation()
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const days = (item, index) => {
    // const nav = navigation
    return <Day item={item} key={index} nav={nav} />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: 'white' }}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.white : Colors.white,
            alignItems: 'center',
          }}>
          {week.map((item, index) => days(item, index))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // const week = [
  //   'Lunes',
  //   'Martes',
  //   'Miercoles',
  //   'Jueves',
  //   'Viernes',
  //   'Sabado',
  //   'Domingo',
  // ];

  // const days = (item: string, index: any) => {
  //   return <Day item={item} key={index} />;
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ContentDay" component={ContentDay} />
      </Stack.Navigator>
      {/* {
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{backgroundColor: 'white'}}>
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.white : Colors.white,
                alignItems: 'center',
              }}>
              {week.map((item, index) => days(item, index))}
            </View>
          </ScrollView>
        </SafeAreaView>
      } */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
