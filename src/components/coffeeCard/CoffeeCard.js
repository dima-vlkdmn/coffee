import { NavLink } from 'react-router-dom';
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  ${props =>
    props.isActive &&
    css`
      text-decoration: underline;
    `}
`;

const CardSection = styled.li`
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  list-style-type: none;
  width: 300px;
  height: 320px;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardImg = styled.img`
  width: 250px;
  height: 160px;
`;

const CardTitle = styled.h3`
    color: #000;
    text-align: center;
    font-size: 20px;
    font-family: Merienda;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    text-decoration: none;
`;

const CardCountry = styled.div`
    color: #000;
    text-align: right;
    font-size: 18px;
    font-family: Merienda;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    margin-top: 10px;
`;

const CardPrice = styled.div`
    color: #000;
    text-align: right;
    font-size: 18px;
    font-family: Merienda;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    margin-top: 10px;
`;

const CoffeCard = ({ title, img, price, country, index }) => {
	return (
		<StyledNavLink to={`/catalog/${index}`}>
			<CardSection>
        <ImageWrapper>
            <CardImg src={img} alt={title} />
        </ImageWrapper>
				<CardTitle >{title}</CardTitle>
        <CardCountry>{country}</CardCountry>
        <CardPrice>{price}</CardPrice>
			</CardSection>
		</StyledNavLink>
	);
};

export default CoffeCard;