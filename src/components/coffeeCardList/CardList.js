import React from 'react';
import styled from 'styled-components';

import CoffeeCard from '../coffeeCard/CoffeeCard';

const CatalogSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-auto-rows: 350px;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const CardList = ({ coffees }) => {
    return (
        <CatalogSection>
            {coffees.map((coffee, index) => (
                <CoffeeCard
                    key={index}
                    title={coffee.title}
                    img={coffee.img}
                    country={coffee.country}
                    price={coffee.price}
                    index={index}
                />
            ))}
        </CatalogSection>
    );
};

export default CardList;

