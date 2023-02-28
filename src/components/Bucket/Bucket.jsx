import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Bucket.module.css';
import { useContext } from 'react';

export default function Bucket({ bucket, onUpdate, onDelete }) {
  const { id, text, status } = bucket;
  const { darkMode } = useContext(DarkModeContext);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...bucket, status });
  };

  const handleDelete = () => {
    onDelete(bucket);
  };

  return (
    <li className={styles.bucket}>
      <input
        type="checkbox"
        id={id}
        className={`${styles.checkbox} ${darkMode === true && styles.darkMode}`}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label
        className={`${styles.bucketText} ${
          darkMode === true && styles.darkMode
        }`}
        htmlFor={id}
      >
        {text}
      </label>
      <span
        className={`${styles.trashIcon} ${
          darkMode === true && styles.darkMode
        }`}
      >
        <button className={styles.trash} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
