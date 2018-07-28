import React,{Component} from 'react';
import PropTypes from 'prop-types';
export  default class Movie extends Component{
    static proptypes={
       movie: PropTypes.object
    }
   render() {
    const {movie}=this.props
       return(
         <div>

          {movie.title}
     
         </div>
           )
   }

}