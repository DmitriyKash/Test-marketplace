import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://magnificent-bonbon-998142.netlify.app/manifest.json">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
};

export default App;
