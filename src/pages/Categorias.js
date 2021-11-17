import React from 'react'
import style from 'styled-components'
import {mobile} from '../compo/Responsive'
import data from '../compo/Data';

const Container = style.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
font-family: 'Poppins', sans-serif
${mobile({
  flexDirection: 'column',
})}
`
const H1 = style.h1`
width:100%;
font-size:50px;
text-align:center;
`
const ItemContainer = style.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:20px;
margin:10px;
text-align:center;
width:25%;
${mobile({
  width:'95%',
  flexDirection:'column',
  justifyContent:'center',
  alignItems: 'center',
  margin: '5px',
  padding: '2px',
  
 
 
})}
`
const Image = style.img`
width:90%;
height:40vh;
border-radius:5px 10px;
object-fit:cover;
${mobile({
  width:'88%',
  height:'48vh',
  
})}
`
const InfoContainer = style.div`
margin:10px;
`
const Info = style.section`
font-size:30px;
`

const Home = () => {
  return (
    <Container>
      <H1>Categorias</H1>
      {data.map((item ,i )=>{
  return (<>
  
  <ItemContainer>
        <Image src= {item.image} alt="picture"/>
        <InfoContainer>
        <Info>
          {item.name}
        </Info>
      </InfoContainer>
      </ItemContainer>
     
  </>)
      })}
     
    </Container>
  )
}

export default Home
