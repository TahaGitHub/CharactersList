// import {Store} from '../src/redux/store';

import combineReducers from '../src/redux/reducers/charactersReducer';
import charactersAction from '../src/redux/actions/charactersAction';

import {Characher} from '../src/models/CharacterModel';

describe('Test character redux process', () => {
  // const store = jest.fn(Store);

  test('should return the initial state', () => {
    expect(combineReducers(undefined, {type: undefined})).toEqual({
      characters: [],
    });
  });

  test('should handle a todo being added to an empty list', () => {
    let character = new Characher({
      name: 'taha',
      occupation: [],
      appearance: [],
      better_call_saul_appearance: [],
    });
    const previousState = [character];

    expect(
      combineReducers([], charactersAction.setCharacters([...previousState])),
    ).toEqual({characters: [character]});
  });
});
