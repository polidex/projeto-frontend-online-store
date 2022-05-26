import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Home extends Component {
  state = {
    categoriesList: [],
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categoriesList = await getCategories();
    this.setState({ categoriesList });
  }

  render() {
    const { categoriesList } = this.state;
    /*       console.log(this.state.categoriesList); */
    return (
      <div>
        <nav>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </nav>
        <div className="categories">
          <ul>
            Categorias
            {categoriesList.map((category) => (
              <li key={ category.id }>
                <button data-testid="category" type="button">{ category.name }</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input
            type="text"
            name="search"
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}
