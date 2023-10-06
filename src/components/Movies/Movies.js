import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PopularMovies from './popularMovies'

const API_KEY_1 = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
const API_KEY_2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=bcc4ff10c2939665232d75d8bf0ec093"

function Movies() {

  const [movies,setMovies]=useState([]);
  const [moviesTR,setMoviesTR]=useState([]);

  useEffect(() => {
      fetch(API_KEY_1)
      .then((res) => res.json())
      .then(data=>{
        setMovies(data.results)
      });
      fetch(API_KEY_2)
      .then((res) => res.json())
      .then(data=>{
        setMoviesTR(data.results)
      });
  },[])

  return (
    <Container>
      <h2>Now Popular Movies</h2>
      <Content>
        {movies.map((movieReq)=>
        <PopularMovies key={movieReq.id} {...movieReq}/>)}
      </Content>
      <h2>Top Rated Movies</h2>
      <Content>
        {moviesTR.slice(0, 10).map((movieReq)=>
        <PopularMovies key={movieReq.id} {...movieReq}/>)}
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5,minmax(0,1fr));
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
`