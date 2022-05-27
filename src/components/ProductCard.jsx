import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ProductCard.css';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    let price = 'sem preço'; // criei esta let porque tava dando erro em alguns produtos que não tinham preço
    const { objProduct } = this.props;
    if (objProduct.price) {
      price = objProduct
        .price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
      <div className="product-container" data-testid="product">
        <Link
          to={ `/product/${objProduct.id}` }
          className="product_item"
          data-testid="product-detail-link"
        >
          <span>{ objProduct.title }</span>
          <img src={ objProduct.thumbnail } alt={ `Imagem de ${objProduct.title}` } />
          <p>{ `Valor ${price}` }</p>
        </Link>
        <button
          className="add_to_cart_btn"
          type="button"
          onClick={ () => console.log('cliquei') }
        >
          Adicionar ao carrinho
        </button>
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
