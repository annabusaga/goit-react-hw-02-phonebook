import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import shortid from 'shortid';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {};

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = text => {
    const contact = {
      id: shortid.generate(),
      name: contact.name,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contact => {
      contact.name.toLowerCase().includes(normalizedFilter);
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          addContact={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {/* <Filter/> */}
        <ContactList
          contacts={visibleContact}
          onDeleteTodo={this.deleteContact}
        />
      </div>
    );
  }
}
