import React from 'react'
import style from 'styled-components'
import {mobilex,mobile,all,table} from './Responsive'
import {Link} from 'react-router-dom'


const Container = style.div`
display:flex;
justify-content:space-between;
border:1px solid black;

width:100%;
${mobile({
  flexDirection: 'column',
  background:'blue',
})}
${table({
  background:'green'

})}
`

const NavContainer = style.div`
width:40%;
 ${mobile({width: '93%'})}
 
`

const MovilContainer = style.div`
border:1px solid black;
width:100%;
padding:10px;
${all({display: 'none'})}
${table({width: '100%'})}
`
const AllContainer = style.div`
display:flex;
justify-content:center;
border:1px solid black;
padding:30px;
${mobile({display: 'none'})}




`
const LogoContainer = style.div`
border:1px solid black;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:30px;

`


const Header = () => {
  return (
    <Container>
      <LogoContainer>
        L.M.J
      </LogoContainer>
     <NavContainer>
       <AllContainer>
         <Link style={{textDecoration: 'none',color: 'red',margin:'10px'}} to='/'>Home</Link>
         <Link style={{textDecoration: 'none',color: 'red',margin:'10px'}}  to='/prendas'>Prendas</Link>
         <Link style={{textDecoration: 'none',color: 'red',margin:'10px'}}  to='/cart'>Cart</Link>
         <Link style={{textDecoration: 'none',color: 'red',margin:'10px'}} to='/checkout'>CheckOut</Link>
         <Link style={{textDecoration: 'none',color: 'red',margin:'10px'}}  to='/about'>About</Link>
       </AllContainer>
       <MovilContainer>
         SandWisch
       </MovilContainer>
     </NavContainer>
    </Container>
  )
}

export default Header
