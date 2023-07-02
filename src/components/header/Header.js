import { Link } from 'react-router-dom';
import styled  from 'styled-components';

import HeaderMenu from '../headerMenu/HeaderMenu';
import CoffeeDivider from '../coffeeDivider/CoffeeDivider';

import backgroundImg from '../../resources/img/main-back.jpg';

const HeaderSection = styled.div`
    padding-top: 30px;
    width: 100%;
    min-height: 100vh;
    background: url(${backgroundImg}) center center/contain no-repeat;
    background-size: 100%;
    padding-bottom: 30px;
`;

const MainWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    flex-direction: column;
`;

const HeaderTitle = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 58px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    margin-bottom: 40px;
`;

const HeaderSubtitle = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 40px;
`;

const MoreButton = styled(Link)`
  width: 120px;
  height: 30px;
  border: 1px solid #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  font-family: 'Merienda';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  background: none;
  margin-top: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s all;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #000000;
    background-color: #ffffff;
    transform: translateY(-5px);
  }
`;

const HeaderMenuPadding = styled.div`
    padding-left: 150px;
`;

const Header = () => {
    return (
        <HeaderSection>
            <HeaderMenuPadding>
                <HeaderMenu colorlogo="white" />
            </HeaderMenuPadding>
            <MainWrapper>
                <HeaderTitle>Everything You Love About Coffee</HeaderTitle>
                <CoffeeDivider colorbeans="white" />
                <HeaderSubtitle>We makes every day full of energy and taste</HeaderSubtitle>
                <HeaderSubtitle>Want to try our beans?</HeaderSubtitle>
                <MoreButton to="/pleasure">More</MoreButton>
            </MainWrapper>
       </HeaderSection>
    )
}

export default Header;