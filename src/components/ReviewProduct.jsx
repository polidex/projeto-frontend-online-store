import React from 'react';
import PropTypes from 'prop-types';

export default class ReviewProduct extends React.Component {
  state = {
    email: '',
    rating: '',
    evaluation: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { id, getProductReviews } = this.props;
    const { email, rating, evaluation } = this.state;
    const review = { email, rating, evaluation };
    const productReviews = JSON.parse(localStorage.getItem(`productReviews-${id}`));
    if (productReviews) {
      productReviews.push(review);
      localStorage.setItem(`productReviews-${id}`, JSON.stringify(productReviews));
    } else {
      localStorage.setItem(`productReviews-${id}`, JSON.stringify([review]));
    }
    getProductReviews();
  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="product-detail-email"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="1">
          <input
            data-testid="1-rating"
            type="radio"
            name="rating"
            value="1"
            onChange={ this.handleChange }
          />
          1
        </label>
        <label htmlFor="2">
          <input
            data-testid="2-rating"
            type="radio"
            name="rating"
            value="2"
            onChange={ this.handleChange }
          />
          2
        </label>
        <label htmlFor="3">
          <input
            data-testid="3-rating"
            type="radio"
            name="rating"
            value="3"
            onChange={ this.handleChange }
          />
          3
        </label>
        <label htmlFor="4">
          <input
            data-testid="4-rating"
            type="radio"
            name="rating"
            value="4"
            onChange={ this.handleChange }
          />
          4
        </label>
        <label htmlFor="5">
          <input
            data-testid="5-rating"
            type="radio"
            name="rating"
            value="5"
            onChange={ this.handleChange }
          />
          5
        </label>
        <label htmlFor="evaluation">
          Comentario:
          <textarea
            data-testid="product-detail-evaluation"
            name="evaluation"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="submit-review-btn"
          type="button"
          onClick={ this.handleClick }
        >
          Enviar
        </button>
      </form>
    );
  }
}

ReviewProduct.propTypes = {
  id: PropTypes.string.isRequired,
  getProductReviews: PropTypes.func.isRequired,
};
