import React from 'react';
import PropTypes from 'prop-types';
import { addSameItem, getItems, removeItem } from '../services/saveItems';

export default class CartItem extends React.Component {
  state = {
    productCount: 0,
  }

  componentDidMount() {
    this.productCounter();
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
    if (name === 'add') {
      addSameItem(cartItem);
    }
    if (name === 'remove' && productCount > 0) {
      removeItem(cartItem);
    }
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
          <button type="button" name="add" onClick={ this.handleClick }>+</button>
          <button type="button" name="remove" onClick={ this.handleClick }>-</button>
        </div>)
    );
  }
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
