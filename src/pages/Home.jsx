import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </nav>
        <input
          type="text"
          name="search"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
