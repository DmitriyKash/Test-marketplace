import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const BuyButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ProductList = ({ products, onBuy }) => {
  return (
    <ProductContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price} TON</p>
          <BuyButton onClick={() => onBuy(product)}>Купить</BuyButton>
        </ProductCard>
      ))}
    </ProductContainer>
  );
};

export default ProductList;
