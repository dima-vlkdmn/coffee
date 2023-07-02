import React, { useState } from 'react';
import styled from 'styled-components';
import CoffeeFilter from "../coffeeFilters/CoffeeFilters";
import CofeeSearch from "../coffeeSearch/CoffeeSearch";
import CardList from "../coffeeCardList/CardList";
import { coffees } from '../../helpers/CoffeeCatalogList';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 800px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 40px;
`;

const SearchTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-family: Merienda;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SearchPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterSelect = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredCoffees = coffees.filter((coffee) => {
    return (
      coffee.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === '' || coffee.country.toLowerCase() === filter.toLowerCase())
    );
  });

  return (
    <div>
      <SearchWrapper>
        <SearchTitle>Looking for</SearchTitle>
        <CofeeSearch onUpdateSearch={handleSearch} />
        <SearchTitle>Or filter</SearchTitle>
        <CoffeeFilter filter={filter} onFilterSelect={handleFilterSelect} />
      </SearchWrapper>
      <CardList coffees={filteredCoffees} />
    </div>
  );
};

export default SearchPanel;