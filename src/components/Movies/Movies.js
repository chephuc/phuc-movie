import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PopularMovies from './popularMovies'

const API_KEY = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
function Movies() {

  const [movies,setMovies]=useState([]);

  useEffect(() => {
    fetch(API_KEY)
    .then((res) => res.json())
    .then(data=>{
      setMovies(data.results)
    })
  },[])

  return (
    <Container>
      <h4>Popular Movies</h4>
      <Content>
        {movies.map((movieReq)=>
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
`