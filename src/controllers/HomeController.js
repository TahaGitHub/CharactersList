import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

/*
 ** Local Imports
 */
import {Store} from '../redux/store';
import charactersAction from '../redux/actions/charactersAction';

import getCharacters from '../services/GetCharacters';

import {Characher} from '../models/CharacterModel';

import HomeScreenView from '../views/HomeScreenView';
import SplashComponent from '../components/SplashComponent';
import CharactersListComponent from '../components/CharactersListComponent';

export default () => {
  // AsyncStorage.clear();

  let [_loading, set_loading] = useState(true);
  let [characters, setcharacters] = useState([]);

  const getData = async () => {
    let data = await AsyncStorage.getItem('data');

    if (!data) {
      // console.log('Getting Data From Api');
      await getCharacters().then(async _data => {
        data = _data;
        AsyncStorage.setItem('data', JSON.stringify(data));
      });
    } else {
      data = JSON.parse(data);
    }

    let dataModel = [];
    data.forEach(element => {
      dataModel.push(new Characher(element));
    });

    // console.log(dataModel);
    // console.log('Passing Data To Redux');
    Store.dispatch(charactersAction.setCharacters(dataModel));

    characters.push(...dataModel);
    set_loading(false);
  };

  // console.log('Rendiring HomeScreenController');
  return (
    <HomeScreenView
      Component={
        !_loading ? (
          <CharactersListComponent characters={characters} />
        ) : (
          <SplashComponent />
        )
      }
      getData={getData}
    />
  );
};
