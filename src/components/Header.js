import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TonConnectComponent from './TonConnectComponent';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MenuButton>☰</MenuButton>
      <Logo to="/">TON Marketplace</Logo>
      <TonConnectComponent />
    </HeaderContainer>
  );
};

export default Header;
