import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CartLink extends React.Component {
  // Quero colocar uma div para contar a quantidade de itens no carrinho (bolinha vermelha com valor encima do elemento)
  render() {
    const { cartQuantity } = this.props;
    const max = 999;
    return (
      <Link id="cart_link" data-testid="shopping-cart-button" to="/cart">
        <box-icon name="cart" />
        <div className="cart_spans">
          <span>Carrinho de</span>
          <span>COMPRAS</span>
        </div>
        {cartQuantity > 0 && (
          <div data-testid="shopping-cart-size" className="cart_quantity">
            {cartQuantity < max ? cartQuantity : '999+'}
          </div>)}
      </Link>
    );
  }
}

CartLink.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};
