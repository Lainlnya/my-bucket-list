import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header>
      <h1 className={styles.h1}>My Bucket List</h1>
      <ul className={styles.ul}>
        <button
          className={`${styles.button} ${styles.dark}`}
          onClick={() => toggleDarkMode()}
        >
          {darkMode === true ? 'DarkMode' : 'LightMode'}
        </button>
        {filters.map((v, i) => (
          <li key={i}>
            <button
              className={`${styles.button} ${filter === v && styles.selected}`}
              onClick={() => onFilterChange(v)}
            >
              {v}
            </button>
          </li>
        ))}
        <li></li>
      </ul>
    </header>
  );
}
