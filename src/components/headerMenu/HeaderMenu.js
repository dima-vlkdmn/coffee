import React from 'react';
import styled from 'styled-components';
import logoBlack from '../../resources/img/logoblack.png';
import logoWhite from '../../resources/img/logowhite.png';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
  width: 400px;
  height: 40px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  align-items: end;
`;

const HeaderItem = styled.li`
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const HeaderItemText = styled.div`
  a {
    position: relative;
    text-decoration: none;
    color: ${props => (props.colorlogo === 'white' ? '#ffffff' : '#000000')};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    transition: transform 0.5s;
  }

  a:hover {
    text-shadow: 0 0 5px white;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.8s;
  }

  a:hover::after {
    width: 100%;
  }

  a.active {
    /* Стили для активного элемента */
    font-weight: bold;

    &::after {
      width: 100%;
    }
  }
`;

const HeaderMenu = ({ colorlogo }) => {
  const isColorLogo = !!colorlogo;

  return (
    <HeaderWrapper>
      <Ul>
        <HeaderItem>
          <LogoContainer>
            <img src={isColorLogo ? logoWhite : logoBlack} alt="" />
            <HeaderItemText colorlogo={colorlogo}>
              <NavLink exact to="/" activeClassName="active">
                Coffee house
              </NavLink>
            </HeaderItemText>
          </LogoContainer>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText colorlogo={colorlogo}>
            <NavLink to="/catalog" activeClassName="active">
              Our coffee
            </NavLink>
          </HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText colorlogo={colorlogo}>
            <NavLink to="/pleasure" activeClassName="active">
              For your pleasure
            </NavLink>
          </HeaderItemText>
        </HeaderItem>
      </Ul>
    </HeaderWrapper>
  );
};

export default HeaderMenu;