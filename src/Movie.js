import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import   OverDrive from 'react-overdrive';
const POSTER_PATH='http://image.tmdb.org/t/p/w154';
const Movie= ({movie})=>{
        return(
            <div>
                <Link to={`/${movie.id}`}>
                <OverDrive id={`/${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt= {movie.title}/>
                </OverDrive>
                
                </Link>
         </div>
     )
    }
    export default  Movie;
                               
    Movie.propTypes={                     
        movie: PropTypes.shape({
        title: PropTypes.string.isRequired 

        })                               
    }.isRequired

   Movie.defaultProps={
       desc: "description not avi"
   }
   export const Poster=styled.img`
    box-shadow: 0px 0px 35px 0px black;
    border-radius: 0px 0px 0px 0px;
    border: 0Px solid;
   `;
   