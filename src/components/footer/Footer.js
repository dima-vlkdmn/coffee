import HeaderMenu from '../headerMenu/HeaderMenu';
import CoffeeDivider from '../coffeeDivider/CoffeeDivider';
import styled  from 'styled-components';

const FooterSection = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterMargin = styled.div`
  margin-top: 30px;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
      <HeaderMenu colorlogo="black" />
        <FooterMargin />
        <CoffeeDivider colorbeans="black" />
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;