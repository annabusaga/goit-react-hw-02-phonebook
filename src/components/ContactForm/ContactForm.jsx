import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handlerInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handlerSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.props.addContact(this.state.name);
    this.setState({ name: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '' });
  };
  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="">
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handlerInput}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
