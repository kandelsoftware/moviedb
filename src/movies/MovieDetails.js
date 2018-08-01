import React, { Component } from 'react';
import {Poster} from './Movie'
import styled from 'styled-components';

import OverDrive from 'react-overdrive';
import {getMovie} from './actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
const BACKDROP_PATH='http://image.tmdb.org/t/p/w1280';
const POSTER_PATH='http://image.tmdb.org/t/p/w154';

class MoviedDetails extends Component {



  componentDidMount(){
    const { getMovie,match}=this.props
         getMovie(match.params.id)

  }   
  render() {
      const {movie}=this.props
    return (
     <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
     <MovieInfo>
         <OverDrive id={`${movie.id}`}>
         <Poster src={`${POSTER_PATH}${movie.poster_path}`}/>
         </OverDrive>
         <div>

         <h1> {movie.title}</h1>
         <h3> {movie.release_date}</h3>
         <p> {movie.overview}</p>
         </div>
     </MovieInfo>
      </MovieWrapper>
    );
  }
}


const MovieWrapper=styled.div`
position: relative;
padding-top: 50vh;
background: url(${props=> props.backdrop}) no-repeat;
background-size:cover;

`;
const MovieInfo=styled.div` 
background: white;
text-align: left;
padding:2rem 10%;
display:flex;
> div{
    margin-left:20px;
}
img{
    position:relative;
    top: -5rem;
}
`

const mapStateToProps=(state)=>({
  movie:  state.movies.movie,
  isLoaded: state.movies.movieLoaded
  })
  const mapTODispatch=dispatch=>bindActionCreators({
    getMovie
  },dispatch)
  export default connect(mapStateToProps,mapTODispatch)(MoviedDetails);
  
