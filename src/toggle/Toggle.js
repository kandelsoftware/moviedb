import React, {  } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import{toggleMessage} from './actions'
 const Toggle=({messageVisibility,toggleMessage,getMovies})=> {
    return (
      <div>
        {
          messageVisibility && 
          <p>this is your toggle </p>
        }
        <button onClick={toggleMessage}>
            Toggle me
        </button>
       
      </div>
    )
}


const mapTODispatch=dispatch=>bindActionCreators({
  toggleMessage,
},dispatch)
const mapStateToProps=state=>({
  messageVisibility: state.toggle.messageVisibility
  })
export default connect(mapStateToProps,mapTODispatch)(Toggle);

