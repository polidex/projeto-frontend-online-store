import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { objProduct } = this.props;
    return (
      <div className="product-item" data-testid="product">
        <p>{ objProduct.title }</p>
        <img src={ objProduct.thumbnail } alt={ `Imagem de ${objProduct.title}` } />
        <p>{ `Valor R$ ${objProduct.price}` }</p>
      </div>
    );
  }
}

Products.propTypes = {
  objProduct: PropTypes.objectOf.isRequired,
};

export default Products;
