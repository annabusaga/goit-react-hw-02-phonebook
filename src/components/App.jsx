import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter/> */}
        {/* <ContactList/> */}
      </div>
    );
  }
}
