import React, { Component } from 'react';
import { getCategories, getProductsFromCategory,
  getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import 'boxicons';
import '../stylesheets/Home.css';
import CartLink from '../components/CartLink';
// import Loading from '../components/Loading';

export default class Home extends Component {
  state = {
    categoriesList: [],
    searchValue: '',
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

  getCategoryItems = async ({ target }) => {
    const { name } = target;
    this.setState({ isLoading: true, isClicked: true });
    const getProducts = await getProductsFromCategory(name);
    this.setState({ productList: getProducts.results, isLoading: false });
  }

  render() {
    console.log(this.props);
    const { categoriesList, searchValue, productList, isLoading, isClicked } = this.state;
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
          <CartLink />
        </nav>
        <div className="main-content">
          <section className="categories">
            <ul>
              Categorias
              {categoriesList.map((category) => (
                <li key={ category.id }>
                  <button
                    onClick={ this.getCategoryItems }
                    name={ category.id }
                    data-testid="category"
                    type="button"
                  >
                    { category.name }
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section className="productList">
            { !isClicked && (
              <p id="home-initial-message" data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)}
            { isLoading ? <p>Carregando</p> : productList.map((objProduct) => (
              <ProductCard
                key={ objProduct.id }
                objProduct={ objProduct }
              />
            )) }
          </section>
        </div>
      </div>
    );
  }
}
