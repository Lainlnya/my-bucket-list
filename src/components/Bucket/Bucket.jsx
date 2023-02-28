import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Bucket.module.css';

export default function Bucket({ bucket, onUpdate, onDelete }) {
  const { id, text, status } = bucket;
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
        className={styles.checkbox}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.bucketText} htmlFor={id}>
        {text}
      </label>
      <span className={styles.trashIcon}>
        <button className={styles.trash} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
