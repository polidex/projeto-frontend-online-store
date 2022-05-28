import React from 'react';
import { Link } from 'react-router-dom';

export default class CartLink extends React.Component {
  // Quero colocar uma div para contar a quantidade de itens no carrinho (bolinha vermelha com valor encima do elemento)
  render() {
    return (
      <Link id="cart_link" data-testid="shopping-cart-button" to="/cart">
        <box-icon name="cart" />
        <div className="cart_spans">
          <span>Carrinho de</span>
          <span>COMPRAS</span>
        </div>
      </Link>
    );
  }
}
