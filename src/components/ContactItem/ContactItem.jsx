import React, { Component } from 'react';

export default function ContactItem({ name, number, id, onDeleteTodo }) {
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    </>
  );
}
