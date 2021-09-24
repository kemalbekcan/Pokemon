import { combineReducers } from 'redux';
import pokeReducers from './pokeReducers';

const rootReducer = combineReducers({
    pokes: pokeReducers,
});

export default rootReducer;