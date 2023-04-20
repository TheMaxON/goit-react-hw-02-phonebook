import React, { Component } from 'react';
import { Input } from './Input/Input';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <Input />
      </>
    );
  }
}
