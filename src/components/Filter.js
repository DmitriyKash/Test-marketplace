import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const FilterSelect = styled.select`
  padding: 10px;
  font-size: 16px;
`;

const Filter = ({ onFilter }) => {
  return (
    <FilterContainer>
      <FilterSelect onChange={(e) => onFilter(e.target.value)}>
        <option value="">Все категории</option>
        <option value="category1">Категория 1</option>
        <option value="category2">Категория 2</option>
        {/* Добавь другие категории по мере необходимости */}
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;
