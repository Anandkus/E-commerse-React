import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const PageNavigation = ({title}) => {
  return (
    <Wrapper>
  <NavLink to='/'>Home/</NavLink> {title}
    </Wrapper>
  )
}
const Wrapper = styled.section`
height:10rem;
background-color:${({theme})=>theme.colors.bg};


font-size:3rem;
padding-left:1.4rem;
display: flex;
align-items: center;
justify-content:flex-start;


a{
    font-size:3rem;
 
}

`

export default PageNavigation