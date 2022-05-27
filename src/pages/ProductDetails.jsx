import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';

export default class ProductDetails extends React.Component {
  state = {
    product: {},
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromId(id);
    this.setState({ product });
  }

  render() {
  /*     console.log('log do state', this.state.product); */

    const { product } = this.state;
    return (
      <div data-testid="product">
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
