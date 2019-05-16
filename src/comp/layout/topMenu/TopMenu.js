import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => (
  <div className="top-menu">
    <Link to={ '/' }><div className="top-menu__menu-option">Pedido</div></Link>
    <Link to={ '/order-history' }><div className="top-menu__menu-option">Historial de pedidos</div></Link>
    <Link to={ '/help' }><div className="top-menu__menu-option">Ayuda</div></Link>
  </div>
);

export default TopMenu;
