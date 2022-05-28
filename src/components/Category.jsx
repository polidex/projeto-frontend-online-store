import React from 'react';
import PropTypes from 'prop-types';

export default class Category extends React.Component {
  render() {
    const { name, onClick, text } = this.props;
    return (
      <button
        className="categories_button"
        onClick={ onClick }
        name={ name }
        data-testid="category"
        type="button"
      >
        { text }
      </button>
    );
  }
}

Category.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
