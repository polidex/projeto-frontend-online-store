import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductFromId } from '../services/api';
import CartLink from '../components/CartLink';
import { getItems, saveItems } from '../services/saveItems';
import '../stylesheets/ProductDetails.css';
import ReviewProduct from '../components/ReviewProduct';

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

  handleClick = () => {
    const { product } = this.state;
    saveItems(product);
    this.getCartItems();
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
        <button
          className="add_to_cart_btn_details"
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <ReviewProduct />
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
