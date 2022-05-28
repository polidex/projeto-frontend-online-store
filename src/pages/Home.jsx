import React, { Component } from 'react';
// import Carousel from 'react-multi-carousel';
import { getCategories, getProductsFromCategory,
  getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import 'boxicons';
import '../stylesheets/Home.css';
import CartLink from '../components/CartLink';
import Category from '../components/Category';
// import 'react-multi-carousel/lib/styles.css';
// import Loading from '../components/Loading';

/* <<---------- COMENTAR .categories display: flex QUANDO HABILITAR CARROSSEL ---------->> */

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 10,
//     slidesToSlide: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 10,
//     slidesToSlide: 5,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 4,
//     slidesToSlide: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 4,
//     slidesToSlide: 2,
//   },
// };

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
          <CartLink cartQuantity={ 2 } />
        </nav>
        <p className="our_categories">NOSSAS CATEGORIAS</p>
        {/* <Carousel
          autoPlay={ false }
          showDot
          infinite
          centerMode
          autoPlaySpeed={ 5000 }
          responsive={ responsive }
          className="categories"
        > */}
        <div className="categories">
          {categoriesList.map((category) => (
            <div key={ category.id }>
              <Category
                onClick={ this.getCategoryItems }
                name={ category.id }
                text={ category.name }
              />
            </div>
          ))}
        </div>
        {/* </Carousel> */}
        <div className="main-content">
          <section className="productList">
            { !isClicked && (
              <p id="home-initial-message" data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)}
            {isLoading ? <p>Carregando</p> : productList.map((objProduct) => (
              <ProductCard
                key={ objProduct.id }
                objProduct={ objProduct }
              />
            ))/* trocar <p>Carregando</p> por <Loading /> quando finalizar projeto */}
          </section>
        </div>
      </div>
    );
  }
}
