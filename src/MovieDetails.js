import React, { Component } from 'react';
import {Poster} from './Movie'
import styled from 'styled-components';
import OverDrive from 'react-overdrive';
const BACKDROP_PATH='http://image.tmdb.org/t/p/w1280';
const POSTER_PATH='http://image.tmdb.org/t/p/w154';
class MoviedDetails extends Component {

 state={
   movie:{},
 }

  async componentDidMount(){
    try{
     const res= await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=202f3536498b0040e1d68d8ba00e0c7b&language=en-US`);
    const movie=await res.json();

    this.setState({
      movie,

    })
    }catch(e){
     console.log(e)
    }

  }  
  render() {
      const {movie}=this.state
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
export default MoviedDetails;
