import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Label } from '../Input/Input.styled.jsx';
import { InputStyle } from '../Input/Input.styled.jsx';

class Filter extends Component {
  state = {
    query: '',
  };

  changeFilter = e => {
    e.preventDefault();
    const query = e.target.value;
    this.props.updateFilter(query);
  };

  render() {
    const { currentFilter } = this.props;

    return (
      <Label htmlFor="search">
        Find contacts by name
        <InputStyle
          type="text"
          name="search"
          placeholder="Search"
          onChange={this.changeFilter}
          value={currentFilter}
        />
      </Label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
