import React from 'react';
import styled from 'styled-components';

import whiteBeans from '../../resources/img/white-beans.png';
import blackBeans from '../../resources/img/black-beans.png';

const Divider = styled.div`
  width: 60px;
  height: 0px;
  border: ${props => (props.colorbeans === 'white' ? '1px solid #ffffff' : '1px solid #000000')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  align-items: center;
`;

const CoffeeDivider = ({ colorbeans }) => {
  return (
    <DividerWrapper>
      <Divider colorbeans={colorbeans === 'white' ? 'white' : 'black'} />
      <img src={colorbeans === 'white' ? whiteBeans : blackBeans} alt="" />
      <Divider colorbeans={colorbeans === 'white' ? 'white' : 'black'} />
    </DividerWrapper>
  );
};

export default CoffeeDivider;