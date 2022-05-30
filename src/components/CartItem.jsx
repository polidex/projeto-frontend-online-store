import React from 'react';
import PropTypes from 'prop-types';
import { addSameItem, getItems, removeItem } from '../services/saveItems';
import { getProductFromId } from '../services/api';

export default class CartItem extends React.Component {
  state = {
    productCount: 0,
    product: {},
  }

  componentDidMount() {
    const { qtd } = this.props;
    this.getProduct();
    this.setState({ productCount: qtd });
  }

  getProduct = async () => {
    const { id } = this.props;
    const product = await getProductFromId(id);
    console.log(product);
    this.setState({ product });
  }

  productCounter = () => {
    const { id } = this.props;
    const cartItems = getItems();
    this.setState({ productCount: cartItems ? cartItems
      .filter((item) => item.id === id).length : 0 });
  }

  handleClick = ({ target }) => {
    const { name } = target;
    const { productCount, product } = this.state;
    // const { getCartItems } = this.props;
    if (name === 'add') {
      addSameItem(product);
    }
    if (name === 'remove' && productCount > 1) {
      removeItem(product);
    }
    // getCartItems();
    this.productCounter();
  }

  render() {
    const { productCount, product: { thumbnail, id, title } } = this.state;
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
  id: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
  // getCartItems: PropTypes.func.isRequired,
};
