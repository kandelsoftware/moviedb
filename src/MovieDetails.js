import React, { Component } from 'react';
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
     <div>
         <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}/>
         <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
         <h1> {movie.title}</h1>
         <h1> {movie.overview}</h1>
         <h1> {movie.release_date}</h1>
      </div>
    );
  }
}



export default MoviedDetails;
