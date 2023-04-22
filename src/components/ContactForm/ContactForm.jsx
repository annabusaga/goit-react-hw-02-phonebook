import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handlerSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
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
            onChange={this.handlerName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
