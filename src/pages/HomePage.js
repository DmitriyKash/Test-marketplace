import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [products] = useState([
    // Пример данных о продуктах
    { id: 1, name: 'Продукт 1', description: 'Описание продукта 1', price: 10, category: 'category1' },
    { id: 2, name: 'Продукт 2', description: 'Описание продукта 2', price: 20, category: 'category2' },
    // Добавь другие продукты по мере необходимости
  ]);

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
           (filter === '' || product.category === filter);
  });

  const handleBuyProduct = (product) => {
    // Функция для обработки покупки продукта
    console.log(`Покупка продукта: ${product.name} за ${product.price} TON`);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <Filter onFilter={setFilter} />
      <ProductList products={filteredProducts} onBuy={handleBuyProduct} />
    </>
  );
};

export default HomePage;
