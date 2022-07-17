import React from 'react';

/*
 ** Local Imports
 */
import {Characher} from '../models/CharacterModel';

import CharacterDetailsView from '../views/CharacterDetailsView';

export default ({route}) => {
  let {character} = route.params;
  character = new Characher(character);

  // console.log('Rendiring CharacterDetailsController');
  return <CharacterDetailsView character={character} />;
};
