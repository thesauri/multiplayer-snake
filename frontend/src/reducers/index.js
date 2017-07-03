import { combineReducers } from 'redux';
import board from './board';
import players from './players';

const rootReducer = combineReducers({
    board,
    players
});

export default rootReducer;