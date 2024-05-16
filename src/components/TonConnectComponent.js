import React, { useState } from 'react';
import styled from 'styled-components';
import { TonConnectButton } from '@tonconnect/ui-react';

const TransactionButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const TonConnectComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthentication = (status, userData) => {
    setIsAuthenticated(status);
    setUser(userData);
  };

  const handleTransaction = async () => {
    if (isAuthenticated && user) {
      try {
        const transaction = {
          to: 'адрес_получателя', // Замените на адрес получателя
          value: '1000000000', // Сумма в наносекундах (1 TON = 10^9 наносекунд)
          message: 'Оплата за товар', // Дополнительное сообщение
        };
        // Используйте метод для отправки транзакции через SDK или TonConnectButton
        console.log('Отправка транзакции:', transaction);
        alert('Транзакция успешно отправлена!');
      } catch (error) {
        console.error('Ошибка при отправке транзакции:', error);
        alert('Не удалось отправить транзакцию.');
      }
    } else {
      alert('Сначала подключите кошелек.');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Пользователь: {user ? user.name : 'Нет данных'}</p>
          <TransactionButton onClick={handleTransaction}>
            Отправить транзакцию
          </TransactionButton>
          <button onClick={() => handleAuthentication(false, null)}>Выйти</button>
        </div>
      ) : (
        <TonConnectButton 
          onLogin={(userData) => handleAuthentication(true, userData)}
          onLogout={() => handleAuthentication(false, null)}
        />
      )}
    </div>
  );
};

export default TonConnectComponent;
