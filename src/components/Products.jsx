import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Products.css';

class Products extends Component {
  render() {
    const { objProduct } = this.props;
    const price = objProduct
      .price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
      <div className="product_item" data-testid="product">
        <span>{ objProduct.title }</span>
        <img src={ objProduct.thumbnail } alt={ `Imagem de ${objProduct.title}` } />
        <p>{ `Valor ${price}` }</p>
      </div>
    );
  }
}

Products.propTypes = {
  objProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Products;
