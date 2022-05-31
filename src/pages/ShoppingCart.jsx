import React from 'react';
import { Link } from 'react-router-dom';
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
      const index = acc.findIndex((item) => item.id === id);
      const magicNumber = -1;
      if (index > magicNumber) {
        acc[index].qtdCart += 1;
        return acc;
      }
      cur.qtdCart = 1;
      acc = [...acc, cur];
      return acc;
    }, []);
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
        && cartItems.map((cartItem) => (
          <CartItem
            key={ cartItem.id }
            cartItem={ cartItem }
            getCartItems={ this.getCartItems }
          />))}
        <Link
          to="/checkout-products"
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}
