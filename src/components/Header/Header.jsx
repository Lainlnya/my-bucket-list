import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <h1 className={styles.h1}>My Bucket List</h1>
      <ul className={styles.ul}>
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
      </ul>
    </header>
  );
}
