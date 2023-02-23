import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddBucket({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSumbit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, state: 'active' });
    setText('');
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Add Bucket"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
