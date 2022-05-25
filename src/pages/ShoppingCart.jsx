import React from 'react';

export default class ShoppingCart extends React.Component {
  state = {
    cartItems: [],
  }

  render() {
    const { cartItems } = this.state;
    return (
      cartItems.length === 0
      && <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
    );
  }
}
