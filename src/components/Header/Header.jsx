import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((v, i) => (
          <li key={i}>
            <button onClick={() => onFilterChange(v)}>{v}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
