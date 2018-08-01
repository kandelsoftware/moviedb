import {combineReducers} from '../../../../Library/Caches/typescript/2.9/node_modules/redux';
import message from './reducer';

const rootReducer=combineReducers({
    message: message,

})

export default rootReducer

