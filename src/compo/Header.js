import React from 'react'
import style from 'styled-components'
import {mobilex,mobile,all,table} from './Responsive'
import {Link} from 'react-router-dom'


const Container = style.div`
display:flex;
justify-content:space-between;
border:1px solid black;
flex-direction:row;
padding:20px;
${mobilex({
  background:'blue',
  justifyContent:'center',
  flexDirection:'column'
})}

`

const NavContainer = style.div`
border:1px solid black;
width:20%;
${mobilex({
 
  width:'100%'
})}
`

const MovilContainer = style.div`
border:3px solid black;
width:100%;
display:flex;
justify-content:center;

${all({display: 'none'})}
`
const AllContainer = style.div`

border:1px solid black;
// width:20%;
${mobile({display: 'none'})}
${mobilex({display: 'none'})}



`
const LogoContainer = style.div`
border:1px solid black;
${mobile({
  textAlign: 'center',
  marginBottom:'10px'
})}
`

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        L.M.J
      </LogoContainer>
     <NavContainer>
       <AllContainer>
         <Link to='/'>Home</Link>
         <Link to='/prendas'>Prendas</Link>
         <Link to='/cart'>Cart</Link>
         <Link to='/checkout'>CheckOut</Link>
         <Link to='/about'>About</Link>
       </AllContainer>
       <MovilContainer>
         item
       </MovilContainer>
     </NavContainer>
    </Container>
  )
}

export default Header
