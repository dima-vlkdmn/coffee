
import styled  from 'styled-components';

import CoffeeDivider from '../coffeeDivider/CoffeeDivider';

const AboutSection = styled.div`
    padding-top: 30px;
    width: 100%;
    min-height: 80vh;
    padding-bottom: 30px;
`;

const AboutWrapper = styled.div`
    margin: 0 auto;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    flex-direction: column;
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
    text-align: center;
    color: #000000;
    margin-top: 40px;
`;

const AboutUs = () => {
    return (
        <AboutSection>
            <AboutWrapper>
                <AboutTitle>About Us</AboutTitle>
                <CoffeeDivider colorbeans="black" />
                <AboutSubtitle>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. </AboutSubtitle>
                <AboutSubtitle>Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</AboutSubtitle>
                
            </AboutWrapper>
       </AboutSection>
    )
}

export default AboutUs;