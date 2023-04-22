import React, { Component } from 'react';
import Input from './Input/Input';
import { ContactsList } from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (
      !this.state.contacts
        .map(contact => contact.name)
        .includes(newContact.name)
    ) {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      return;
    }
    return alert(`${newContact.name} is already in contacts.`);
  };

  onRemove = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = query => {
    this.setState({ filter: query });
  };

  render() {
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <Input onSubmit={this.addContact} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter
            currentFilter={this.state.filter}
            updateFilter={this.changeFilter}
          />
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onRemove={this.onRemove}
          />
        </Section>
      </>
    );
  }
}
