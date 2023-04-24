import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <>
      <label htmlFor="">
        Find contacts by name{' '}
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
}
