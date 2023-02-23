import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Bucket({ bucket, onUpdate, onDelete }) {
  const { text, status } = bucket;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...bucket, status });
  };

  const handleDelete = () => {
    onDelete(bucket);
  };

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
