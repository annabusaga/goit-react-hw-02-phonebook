import React, { Component } from 'react';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({ contacts, onDeleteTodo, children }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
