import React from 'react';
import './App.scss';
import OrderPage from './comp/orderPage/OrderPage';
import Header from './comp/layout/header/Header';
import TopMenu from './comp/layout/topMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <TopMenu />
      <OrderPage />
    </div>
  );
}

export default App;
