import React from 'react'
import style from 'styled-components'
import {mobilex,mobile,all,table} from '../compo/Responsive'
import Data from '../compo/Data'
import data from '../compo/Data';

const Container = style.div`
display:flex;
${mobile({
  flexDirection: 'column',
})}
`
const ItemContainer = style.div`

width:44%;
padding:20px;
margin:20px;
text-align:center;
${mobile({
  width:'100%',
  flexDirection:'column',
  justifyContent:'center',
  alignItems: 'center',
  margin: '3px',
  padding: '0',
  border:'1px solid black'
  
 
 
})}
`
const Image = style.img`
width:100%;
border-radius:5px 10px;
${mobile({
  width:'50%',
  height:'40vh',
  
})}
`
const InfoContainer = style.div`
margin:10px;
`
const Info = style.section`

`

const Home = () => {
  return (
    <Container>
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
