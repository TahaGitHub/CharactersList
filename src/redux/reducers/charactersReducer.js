import charactersAction from '../actions/charactersAction';

const initState = {
  characters: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case charactersAction.INSERT_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
      };

    default:
      return state;
  }
};
