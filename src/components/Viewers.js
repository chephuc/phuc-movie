import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png"></img>
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 20px;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(3,minmax(0,1fr));
    }
`

const Wrap = styled.div`

    border-radius: 10px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }

`
