import React from 'react'
import style from 'styled-components'
import {mobilex,mobile,all,table} from '../compo/Responsive'
import data from '../compo/Data';

const Container = style.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
${mobile({
  flexDirection: 'column',
})}
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
  margin: '3px',
  padding: '2px',
  
 
 
})}
`
const Image = style.img`
width:300px;
border-radius:5px 10px;
${mobile({
  width:'97%',
  height:'48vh',
  
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
