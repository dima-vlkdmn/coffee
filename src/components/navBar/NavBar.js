import React from 'react';
import styled from 'styled-components';
import HeaderMenu from '../headerMenu/HeaderMenu';

const NavBarSection = styled.div`
  padding-top: 30px;
  width: 100%;
  min-height: 20vh;
  background: url(${props => props.backgroundImg}) center center/contain no-repeat;
  background-size: 100%;
  padding-bottom: 30px;
`;

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  flex-direction: column;
  padding-bottom: 40px;
`;

const NavTitle = styled.div`
  font-family: 'Merienda';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 58px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
`;

const HeaderMenuPadding = styled.div`
  padding-left: 150px;
`;

const NavBar = ({ backgroundImg, title, colorlogo }) => {
  return (
    <NavBarSection backgroundImg={backgroundImg}>
      <HeaderMenuPadding>
        <HeaderMenu colorlogo={colorlogo} />
      </HeaderMenuPadding>
      <MainWrapper>
        <NavTitle>{title}</NavTitle>
      </MainWrapper>
    </NavBarSection>
  );
};

export default NavBar;