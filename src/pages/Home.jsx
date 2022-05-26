import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';
import 'boxicons';
import Loading from '../components/Loading';

export default class Home extends Component {
  state = {
    categoriesList: [],
    searchValue: '',
    categoryId: '',
    productList: [],
    isLoading: false,
    isClicked: false,
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
    this.setState({ isLoading: true, isClicked: true });
    const getProducts = await getProductsFromCategoryAndQuery(categoryId, searchValue);
    this.setState({ productList: getProducts.results, isLoading: false });
  }

  render() {
    const { categoriesList, searchValue, productList, isLoading, isClicked } = this.state;
    console.log(productList);
    return (
      <div>
        <nav>
          <div className="input_container">
            <input
              type="text"
              name="search"
              value={ searchValue }
              data-testid="query-input"
              placeholder="Buscar produtos, marcas e muito mais"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              id="search-alt-2"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              <box-icon name="search" />
            </button>
          </div>
          <Link id="cart_link" data-testid="shopping-cart-button" to="/cart">
            <box-icon name="cart" />
            <div className="cart_spans">
              <span>Carrinho de</span>
              <span>COMPRAS</span>
            </div>
          </Link>
        </nav>
        <div className="main-content">
          <section className="categories">
            <ul>
              Categorias
              {categoriesList.map((category) => (
                <li key={ category.id }>
                  <button data-testid="category" type="button">{ category.name }</button>
                </li>
              ))}
            </ul>
          </section>
          <section className="productList">
            { !isClicked && (
              <p id="home-initial-message" data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)}
            { isLoading ? <Loading /> : productList.map((objProduct) => (
              <Products key={ objProduct.id } objProduct={ objProduct } />
            )) }
          </section>
        </div>
      </div>
    );
  }
}
