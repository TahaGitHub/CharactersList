import {combineReducers} from 'redux';

// import ui from './ui';
import charactersReducer from './charactersReducer';

export default combineReducers({
  // ui: ui,
  characters: charactersReducer,
});
