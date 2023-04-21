import React, { Component } from 'react';
import Input from './Input/Input';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    console.log('Default contacts get: ', newContact);
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    console.log('Default contacts: ', this.state.contacts);
    return (
      <>
        <Input onSubmit={this.addContact} />
        <label htmlFor="search">
          Find contacts by name
          <input
            type="text"
            name="search"
            onChange={event => this.setState({ filter: event.target.value })}
            value={this.state.filter}
          />
        </label>

        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}
