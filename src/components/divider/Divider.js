import React from 'react';
import styled from 'styled-components';

const DefaultDivider = styled.div`
  width: 250px;
  height: 0px;
  border: 1px solid #000000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const DividerWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 300px;
  padding-bottom: 40px;
  padding-top: 40px;
`;

const Divider = () => {
    return (
      <DividerWrapper>
        <DefaultDivider  />
      </DividerWrapper>
    );
}

export default Divider;