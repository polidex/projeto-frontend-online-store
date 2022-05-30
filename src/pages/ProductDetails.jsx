import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductFromId } from '../services/api';
import CartLink from '../components/CartLink';
import { getItems } from '../services/saveItems';

export default class ProductDetails extends React.Component {
  state = {
    product: {},
    cartQuantity: 0,
  }

  componentDidMount() {
    this.getProduct();
    this.getCartItems();
  }

  getCartItems = () => {
    const cartItems = getItems();
    this.setState({ cartQuantity: cartItems.length });
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromId(id);
    this.setState({ product });
  }

  render() {
    // console.log('log do state', this.state.product);
    const { product, cartQuantity } = this.state;

    return (
      <div data-testid="product">
        <nav>
          <div>
            <Link to="/">
              Voltar a tela inicial
            </Link>
          </div>
          <CartLink cartQuantity={ cartQuantity } />
        </nav>
        <h1>Product Details</h1>
        <p data-testid="product-detail-name">{ product.title }</p>
        <p>{ product.price }</p>
        <img alt="imagem do produto" src={ product.thumbnail } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
