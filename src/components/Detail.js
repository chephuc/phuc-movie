import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const API_IMG = "https://image.tmdb.org/t/p/w500/"
function Detail() {

  const {id} = useParams();

  const API_KEY = "https://api.themoviedb.org/3/movie/"+ id + "?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US";

  const [movies,setMovies]=useState([]);

  useEffect(() => {
    fetch(API_KEY)
    .then((res) => res.json())
    .then(data=>{
      setMovies(data)
    })
  },[])

  // console.log(movies);

  return (
    <Container>
      <Poster>
        <Background>
          <img src={API_IMG+movies.poster_path}></img>
        </Background>
      </Poster>

      <Content>
        <ImageTitle>
        <h1>{movies.original_title}</h1>
        </ImageTitle>
        <Control>
          <PlayButton href={movies.homepage} target="_blank">
            <img src='/images/play-icon-black.png'/>
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton href={movies.homepage} target="_blank">
            <img src='/images/play-icon-white.png'/>
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src='/images/group-icon.png'></img>
          </GroupWatchButton>
        </Control>
        <SubTitle>
            <h2>Genres</h2>
            {movies.genres?.map((data) => (<SubItem key={data.id}>{data.name}</SubItem>))}
        </SubTitle>
        <SubTitle>
            <h2>Release Date</h2>
            <SubItem>{movies.release_date}</SubItem>
        </SubTitle>
        <Description>
          {movies.overview}
        </Description>
      </Content>
    </Container>
  )
}

export default Detail

const Container = styled.div`

  min-height: calc(100vh- 70px);
  padding:0 calc(3.5vw + 5px);
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 600px) {
    display: block;
    grid-template-columns: none;
  }

  &:before {
    background: url("/images/home-background.png") center center /cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

`

const Poster = styled.div`
  margin: 50px 200px;
`

const Background = styled.div`

  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 250px;
    margin-left: -140px;
  }

`

const Content = styled.div`
`

const ImageTitle = styled.div`

  margin:80px 0 20px;

  // img {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: contain;
  // }
`

const Control = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: inline-block;
  }
`

const PlayButton = styled.a`
  border-radius: 4px;
  font-size: 15px;
  padding 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249,249,249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgb(198,198,198);
  }

  @media screen and (max-width: 600px) {
    display: inline-block;
    img {
      margin-top: 5px;
    }
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color: rgb(249,249,249);
  text-transform: uppercase;
`

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0);
`

const SubTitle = styled.div`
  color: rgb(249,249,249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 25px;

  h2{
    display: inline;
    margin-right: 5px;
  }
`

const Description = styled.div`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 30px;
  width: 80%;
  color: rgb(249,249,249);
`

const SubItem = styled.a`
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249,249,249,0.1);
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  margin-left: 10px;
  padding: 5px;
`