/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*
 ** Local Imports
 */
import {Store} from './src/redux/store';

import HomeController from './src/controllers/HomeController';
import CharacterDetailsController from './src/controllers/CharacterDetailsController';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  // console.log('Rendiring App Screen');
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreenView">
          <Stack.Screen
            name="HomeScreenView"
            component={HomeController}
            options={() => ({
              title: 'List Of Characters',
            })}
          />
          <Stack.Screen
            name="Character Details"
            component={CharacterDetailsController}
            options={({route}) => ({
              title: route.params.character.name.toString() + ' Details',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
