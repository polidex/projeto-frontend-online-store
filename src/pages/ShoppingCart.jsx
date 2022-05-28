import React from 'react';
import CartItem from '../components/CartItem';
import { getItems } from '../services/saveItems';

export default class ShoppingCart extends React.Component {
  state = {
    cartItems: {},
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    const items = getItems();
    const cartItems = items.reduce((acc, cur) => {
      const { id } = cur;
      if (Object.keys(acc).includes(id)) {
        acc[id] += 1;
      } else {
        acc[id] = 1;
      }
      return acc;
    }, {});
    this.setState({ cartItems });
  }

  render() {
    const { cartItems } = this.state;
    const cartValues = Object.values(cartItems);
    return (
      <div>
        {cartValues.length === 0
        && <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>}
        {cartValues.length > 0
        && Object.entries(cartItems).map(([key, value]) => (
          <CartItem
            key={ key }
            id={ key }
            qtd={ value }
            getCartItems={ this.getCartItems }
          />))}
      </div>
    );
  }
}
