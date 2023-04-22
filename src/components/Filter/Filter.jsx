import React, { Component } from 'react';

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
      <label htmlFor="search">
        Find contacts by name
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={this.changeFilter}
          value={currentFilter}
        />
      </label>
    );
  }
}

export default Filter;
