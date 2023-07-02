
import {useParams} from "react-router-dom";
import styled  from 'styled-components';

import {coffees} from "./../helpers/CoffeeCatalogList"
import CoffeeDivider from "../components/coffeeDivider/CoffeeDivider";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

import coffeeNav from "../components/navBar/nav_bar.jpg"

const AboutSection = styled.div`
    padding-top: 70px;
    padding-bottom: 60px;
    width: 100%;
    min-height: 50vh;
    display: grid;
    grid-template-columns: 300px 400px;
    justify-content: center;
    grid-gap: 50px;
`;

const FlexWrapper = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AboutWrapper = styled.div`
    width: 400px;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutTitle = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-bottom: 40px;
`;

const AboutSubtitle = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-top: 30px;
    text-align: left;
`;

const AboutImage = styled.img`
    height: 355px;
    width: 270px;
`;

const BoldText = styled.span`
  font-weight: 700;
  font-size: 15px;
`;


const Coffee = () => {
	const {id} = useParams();
	const coffee = coffees[id];

    return (

            <>
                  <NavBar backgroundImg={coffeeNav} title="Our Coffee" colorlogo="white" />
                        <AboutSection>
                              <ImageWrapper>
                                    <AboutImage src={coffee.imgbig} alt="coffee" />
                              </ImageWrapper>

                              <AboutWrapper>
                                    <FlexWrapper>
                                          <AboutTitle>About it</AboutTitle>
                                          <CoffeeDivider colorbeans="black" />
                                    </FlexWrapper>
                                    <AboutSubtitle><BoldText>Country:</BoldText> {coffee.country}</AboutSubtitle>
                                    <AboutSubtitle><BoldText>Description:</BoldText>  {coffee.description}</AboutSubtitle>
                                    <AboutSubtitle><BoldText>Price:</BoldText> {coffee.price}</AboutSubtitle> 
                              </AboutWrapper>

                        
                        </AboutSection>
                  <Footer/>
            </>

	);
}

export default Coffee;