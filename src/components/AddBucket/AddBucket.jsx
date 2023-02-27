import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddBucket.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function AddBucket({ onAdd }) {
  const [text, setText] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSumbit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, state: 'active' });
    setText('');
  };

  return (
    <form
      className={`${styles.form} ${darkMode === true && styles.darkMode}`}
      onSubmit={handleSumbit}
    >
      <input
        className={styles.addBucket}
        type="text"
        placeholder="Add Bucket"
        value={text}
        onChange={handleChange}
      />
      <button
        className={`${styles.button} ${darkMode === true && styles.darkMode}`}
      >
        Add
      </button>
    </form>
  );
}
