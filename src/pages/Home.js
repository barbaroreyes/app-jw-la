import React from 'react'
import style from 'styled-components'
import {mobilex,mobile,all,table} from '../compo/Responsive'

const Container = style.div`

display:flex;
justify-content:center;
flex-direction:row;
height:60vh;
box-size:border-box;
width:90%;
${mobile({
  flexDirection: 'column',
  height:"300vh",
  flexWrapper:'wrapper'
})}
`
const Item = style.div`
border:1px solid black;
width:27%;
border-radius:20px 20px;
margin:10px;
display:flex;
justify-content:center;
align-items:center;
${mobile({
  width:'100%',
  height:'35vh',
  padding:'10px'
})}
`

const Home = () => {
  return (
    <Container>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
     
    </Container>
  )
}

export default Home
