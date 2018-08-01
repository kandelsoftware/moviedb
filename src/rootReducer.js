import {combineReducers} from '../../../../Library/Caches/typescript/2.9/node_modules/redux';

import toggle from './toggle/reducer';
import movies from './movies/reducer';
const rootReducer=combineReducers({
    toggle,
    movies

})

export default rootReducer

