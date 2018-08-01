import {TOGGLE_MESSAGE} from './actions'
const initialState={
    messageVisibility: false
}

export default function(state=initialState,action){
const type=action.type
switch(type){
case TOGGLE_MESSAGE:
return { messageVisibility: !state.messageVisibility}
default: 
return state
}
}