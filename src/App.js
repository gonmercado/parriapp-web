import React, { useReducer, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import OrderPage from './comp/orderPage/OrderPage';
import Header from './comp/layout/header/Header';
import TopMenu from './comp/layout/topMenu/TopMenu';
import OrderHistoryPage from './comp/orderHistoryPage/OrderHistoryPage';
import NotFoundPage from './comp/noFoundPage/NotFoundPage';
import CartPage from './comp/cartPage/CartPage';
import CartProvider from './cartProvider';

const App = () => {

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Router>
          <div className={ 'app-content' }>
            <TopMenu />
            <Switch >
              <Route exact path={ '/' } component={ OrderPage } />
              <Route path={ '/order-history' } component={ OrderHistoryPage } />
              <Route path={ '/show-cart' } component={ CartPage } />
              <Route component={ NotFoundPage } />
            </Switch>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
