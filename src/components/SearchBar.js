import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 16px;
`;

const SearchBar = ({ onSearch }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Поиск продуктов..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
