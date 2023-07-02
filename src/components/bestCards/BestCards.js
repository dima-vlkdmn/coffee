import { Component } from "react";
import styled  from 'styled-components';

import backBestdImg from "../../resources/img/paper_back.jpg";
import photo1 from "../../resources/img/1.jpg";
import photo2 from "../../resources/img/2.jpg";
import photo3 from "../../resources/img/3.jpg";

const BestSection = styled.div`
    padding-top: 30px;
    width: 100%;
    min-height: 100vh;
    background: url(${backBestdImg}) center center/contain no-repeat;
    background-size: 100%;
    padding-bottom: 30px;
`;

const BestWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
    display: flex;
  
    align-items: center;
    padding-top: 150px;
    flex-direction: column;
`;

const BestTitle = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    color: #000000;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
  
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 240px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    padding: 20px;
`;

const CardImage = styled.img`
  width: 150px;
  height: 130px;
`;

const CardTitle = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    margin-top: 10px;
`;

const CardPrice = styled.div`
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    margin-top: 10px;
`;

class BestCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Solimo Coffee Beans 2 kg', price: '10.73$', photo: photo1, id: 1},
                {name: 'Presto Coffee Beans 1 kg', price: '15.99$', photo: photo2, id: 2},
                {name: 'AROMISTICO Coffee 1 kg', price: '6.99$', photo: photo3, id: 3}
            ],
        }
    }
    render() {
        const {data} = this.state;
        return (
            <BestSection>
                <BestWrapper>
                    <BestTitle>Our best</BestTitle>
                
                    <CardContainer>
                        {data.map((item) => (
                        <CardWrapper key={item.id}>
                            <CardImage src={item.photo} alt="" />
                            <CardTitle>{item.name}</CardTitle>
                            <CardPrice>{item.price}</CardPrice>
                        </CardWrapper>
                        ))}
                    </CardContainer>
                </BestWrapper>
            </BestSection>
        )
    }
}

export default BestCards;