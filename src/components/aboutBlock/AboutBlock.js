import React from 'react';
import styled from 'styled-components';

import CoffeeDivider from '../coffeeDivider/CoffeeDivider';

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

const AboutWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  color: #000000;
  margin-top: 30px;
`;

const AboutImage = styled.img`
  height: 355px;
  width: 270px;
`;

const AboutBlock = ({ imageSrc, title, subtitles }) => {
  return (
    <AboutSection>
      <ImageWrapper>
        <AboutImage src={imageSrc} alt="About" />
      </ImageWrapper>
      <AboutWrapper>
        <AboutTitle>{title}</AboutTitle>
        <CoffeeDivider colorbeans="black" />
        {subtitles.map((subtitle, index) => (
          <AboutSubtitle key={index}>{subtitle}</AboutSubtitle>
        ))}
      </AboutWrapper>
    </AboutSection>
  );
};

export default AboutBlock;