import React from 'react';
import 'boxicons';

export default class FreeShipping extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="free-shipping">Free shipping</p>
        <box-icon type="solid" name="truck" />
      </div>
    );
  }
}
