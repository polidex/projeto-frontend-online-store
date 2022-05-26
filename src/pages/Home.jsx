import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';
import 'boxicons';

export default class Home extends Component {
  state = {
    categoriesList: [],
    searchValue: '',
    categoryId: '',
    productList: [],
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categoriesList = await getCategories();
    this.setState({ categoriesList });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  }

  handleClick = async () => {
    const { searchValue, categoryId } = this.state;
    const getProducts = await getProductsFromCategoryAndQuery(categoryId, searchValue);
    this.setState({ productList: getProducts.results });
  }

  render() {
    const { categoriesList, searchValue, productList } = this.state;
    console.log(productList);
    return (
      <div>
        <nav>
          <Link data-testid="shopping-cart-button" to="/cart">
            <box-icon name="cart" />
            <div className="cart_spans">
              <span>Carrinho de</span>
              <span>COMPRAS</span>
            </div>
          </Link>
        </nav>
        <div className="categories">
          <ul>
            {/* npx create-react-app react-multilevel-dropdown-menu --> dropdown ideia */}
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
            value={ searchValue }
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          { productList.map((objProduct) => (
            <Products key={ objProduct.id } objProduct={ objProduct } />
          )) }
        </div>
      </div>
    );
  }
}
