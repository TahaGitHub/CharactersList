/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';

/*
 ** Local Imports
 */
import mainReducer from './src/redux/reducer';
import charactersAction from './src/redux/actions/charactersAction';

import SplashComponent from './src/components/SplashComponent';
import CharactersList from './src/screens/charactersList/CharactersList';

import GetCharacters from './src/services/GetCharacters';
import CharacterDetails from './src/screens/characterDetails/CharacterDetails';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [loading, setloading] = useState(true);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // console.log('Rendiring App Screen');

  useEffect(() => {
    AsyncStorage.clear();

    const _run = async () => {
      let data = await AsyncStorage.getItem('data');

      if (!data) {
        // console.log('Getting Data From Api');

        await GetCharacters().then(async _data => {
          data = _data;
          await AsyncStorage.setItem('data', JSON.stringify(data));
        });
      } else {
        data = JSON.parse(data);
      }

      // console.log(data);
      // console.log('Passing Data To Redux');
      await store.dispatch(charactersAction.setCharacters(data));
      setloading(false);
    };

    _run();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {!loading ? <CharactersList /> : <SplashComponent />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const store = createStore(mainReducer);
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Characters List">
          <Stack.Screen name="Characters List" component={App} />
          <Stack.Screen
            name="Character Details"
            component={CharacterDetails}
            options={({route}) => ({
              title: route.params.character.name.toString() + ' Details',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MainApp;
