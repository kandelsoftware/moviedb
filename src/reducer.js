const initialState={
    messageVisibility:false
}

export default function(state=initialState,action){
const type=action.type
switch(type){
case "MESSAGE":
return {state}
default: 
return state
}
}