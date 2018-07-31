import React, { Component } from 'react'
import createStore from 'react-redux';

export default class Reduxtest extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default Reduxtest; 

defaultState={
  welcome: "hi",
  otherState: "some stuff",
}


hello=(state=defaultState,action)=>{
   switch(action.type){
     case 'GREET_ME' :
     return {...state,welcome: action.result}
     case  "GREET_WORLD":
     return {...state,welcome: 'hello world'}
     default:
      return state;
   }

}

const store=createStore(hello);
const result ="something coming back from apis"
store.dispatch({
    type: "GREET_ME",
    result: result
})

console.log(store.getState());