import React from 'react'
import style from 'styled-components'


const Container = style.div`
border:1px solid black;
display:flex;
justify-content:center;
flex-direction:row;
height:55vh;
`
const Item = style.div`
border:1px solid black;
width:25%;
border-radius:20px 20px;
margin:8px;
display:flex;
justify-content:center;
align-items:center;

`

const Home = () => {
  return (
    <Container>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
     
    </Container>
  )
}

export default Home
