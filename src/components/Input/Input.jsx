import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { InputContainer } from './Input.styled.jsx';

class Input extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    this.setState(
      {
        id: nanoid(),
        name: name.value,
        number: number.value,
      },
      () => {
        const newContact = {
          id: this.state.id,
          name: this.state.name,
          number: this.state.number,
        };
        this.props.onSubmit(newContact);
      }
    );
  };

  render() {
    return (
      <InputContainer onSubmit={this.onSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </InputContainer>
    );
  }
}

export default Input;
