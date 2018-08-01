import React, {  } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import{toggleMessage} from './actions'
 const Toggle=({messageVisibility,toggleMessage})=> {
    return (
      <div>
        {
          messageVisibility && 
          <p>this is your toggle </p>
        }
        <button onClick={toggleMessage}>
            toggle me
        </button>
      </div>
    )
}


const mapTODispatch=dispatch=>bindActionCreators({
  toggleMessage
},dispatch)
const mapStateToProps=state=>({
  messageVisibility: state.message.messageVisibility
  })
export default connect(mapStateToProps,mapTODispatch)(Toggle);

