import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ProductCard.css';
import { Link } from 'react-router-dom';
import { saveItems } from '../services/saveItems';

export default class ProductCard extends Component {
  state = {
    isFocused: false,
  }

  handleClick = () => {
    const { objProduct } = this.props;
    saveItems(objProduct);
  }

  addFocus = () => {
    this.setState({ isFocused: true });
  }

  removeFocus = () => {
    this.setState({ isFocused: false });
  }

  render() {
    let price = 'sem preço'; // criei esta let porque tava dando erro em alguns produtos que não tinham preço
    const { objProduct } = this.props;
    const { isFocused } = this.state;
    if (objProduct.price) {
      price = objProduct
        .price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return (
      <div
        className="product-container"
        data-testid="product"
      >
        <Link
          onFocus={ this.addFocus }
          onBlur={ this.removeFocus }
          onMouseEnter={ this.addFocus }
          onMouseLeave={ this.removeFocus }
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
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <span
          className={ isFocused ? 'more_info active' : 'more_info' }
        >
          Ver detalhes do produto
        </span>
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
