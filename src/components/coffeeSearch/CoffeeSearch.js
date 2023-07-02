import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const CofeeSearch = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setTerm(term);
    onUpdateSearch(term);
  };

  return (
    <Input
      type="text"
      placeholder="Найти кофе"
      value={term}
      onChange={handleInputChange}
    />
  );
};

export default CofeeSearch;