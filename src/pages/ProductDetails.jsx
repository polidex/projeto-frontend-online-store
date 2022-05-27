import React from 'react';

export default class ProductDetails extends React.Component {
  render() {
    return (
      <div data-testid="product">
        <h1>Product Details</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}
