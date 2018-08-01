import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import {getMovies} from './actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class MovieList extends Component {


   componentDidMount(){
    const { getMovies,isLoaded}=this.props
       if(!isLoaded){
         getMovies()
        }

  }  
  render() {
    const { movies,isLoaded}=this.props
    if(!isLoaded)  return(<h1>Loading...</h1>)
    return (
     <MovieWrap>
         {movies.map(movie => <Movie key={movie.id }   movie={movie}/>)  }
      </MovieWrap>
    );
  }
}

const mapStateToProps=(state)=>({
movies:  state.movies.movies,
isLoaded: state.movies.moviesLoaded
})
const mapTODispatch=dispatch=>bindActionCreators({
  getMovies
},dispatch)
export default connect(mapStateToProps,mapTODispatch)(MovieList);

const MovieWrap=styled.div`
display:grid;
padding:1rem;
grid-template-columns: repeat(6,1fr);
grid-row-gap: 1rem;
`;