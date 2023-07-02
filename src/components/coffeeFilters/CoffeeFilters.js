import React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 4px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  ${props =>
    props.active
      ? `
      background-color: #f8f9fa;
      color: #000;
      box-shadow: 0 0 5px rgba(0, 128, 0, 0.3);
    `
      : `
      background-color: #fff;
      color: #000;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    `};

  &:hover {
    background-color: #f8f9fa;
    color: #000;
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.3);
  }
`;

const CoffeeFilter = ({ filter, onFilterSelect }) => {
  const handleFilterSelect = (filterName) => {
    onFilterSelect(filterName);
  };

  const buttonsData = [
    { name: 'brazil', label: 'Brazil' },
    { name: 'kenya', label: 'Kenya' },
    { name: 'columbia', label: 'Columbia' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;

    return (
      <Button
        type="button"
        active={active}
        onClick={() => handleFilterSelect(name)}
        key={name}
      >
        {label}
      </Button>
    );
  });

  return <ButtonGroup>{buttons}</ButtonGroup>;
};

export default CoffeeFilter;