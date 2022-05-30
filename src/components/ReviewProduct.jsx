import React from 'react';

export default class ReviewProduct extends React.Component {
  state = {
    email: '',
    rating: '',
    evaluation: '',
    productReviews: [],
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <form>
        <input
          type="email"
          data-testid="product-detail-email"
        />
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
          <input data-testid="2-rating" type="radio" name="rating" value="2" />
          2
        </label>
        <label htmlFor="3">
          <input data-testid="3-rating" type="radio" name="rating" value="3" />
          3
        </label>
        <label htmlFor="4">
          <input data-testid="4-rating" type="radio" name="rating" value="4" />
          4
        </label>
        <label htmlFor="5">
          <input data-testid="5-rating" type="radio" name="rating" value="5" />
          5
        </label>
        <textarea data-testid="product-detail-evaluation" />
        <button data-testid="submit-review-btn" type="submit">Enviar</button>
      </form>
    );
  }
}
