import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from './Nav';
const Header = () => {
    const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: -5px 10px 16px -10px rgba(0,0,0,0.68);
  -webkit-box-shadow: -5px 10px 16px -10px rgba(0,0,0,0.68);
  -moz-box-shadow: -5px 10px 16px -10px rgba(0,0,0,0.68);

  .logo {
    height: 5rem;
  }
`;
  return (
    <MainHeader>
<NavLink to='/'>
<img src="https://tse1.mm.bing.net/th?id=OIP.fKCkQf8qFIXzLAJYVljx5gHaDq&pid=Api&P=0" alt="" className='logo' />
</NavLink>

<Nav/>
    </MainHeader>
  )
}

export default Header