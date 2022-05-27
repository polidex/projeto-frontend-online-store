import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Products.css';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { objProduct } = this.props;
    const price = objProduct
      .price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
      <div data-testid="product" className="product_item">
        <Link
          to={ `/product/${objProduct.id}` }
          className="product_item"
          data-testid="product-detail-link"
        >
          <span>{ objProduct.title }</span>
          <img src={ objProduct.thumbnail } alt={ `Imagem de ${objProduct.title}` } />
          <p>{ `Valor ${price}` }</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  objProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
