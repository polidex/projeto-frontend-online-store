import React from 'react';
import PropTypes from 'prop-types';
import { addSameItem, getItems, removeItem } from '../services/saveItems';

export default class CartItem extends React.Component {
  state = {
    productCount: 0,
  }

  componentDidMount() {
    const { cartItem: { qtdCart } } = this.props;
    this.setState({ productCount: qtdCart });
  }

  productCounter = () => {
    const { cartItem: { id } } = this.props;
    const cartItems = getItems();
    this.setState({ productCount: cartItems ? cartItems
      .filter((item) => item.id === id).length : 0 });
  }

  handleClick = ({ target }) => {
    const { name } = target;
    const { productCount } = this.state;
    const { cartItem } = this.props;
    // const { getCartItems } = this.props;
    if (name === 'add') {
      addSameItem(cartItem);
    }
    if (name === 'remove' && productCount > 1) {
      removeItem(cartItem);
    }
    // getCartItems();
    this.productCounter();
  }

  render() {
    const { productCount } = this.state;
    const { cartItem: { thumbnail, id, title } } = this.props;
    return (
      productCount > 0
      && (
        <div className="cart-item">
          <img src={ thumbnail } alt={ `Imagem do produto ${id}` } />
          <p data-testid="shopping-cart-product-name">{title}</p>
          <span data-testid="shopping-cart-product-quantity">{productCount}</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            name="add"
            onClick={ this.handleClick }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name="remove"
            onClick={ this.handleClick }
          >
            -
          </button>
        </div>)
    );
  }
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    qtdCart: PropTypes.number,
  }).isRequired,
  // getCartItems: PropTypes.func.isRequired,
};
