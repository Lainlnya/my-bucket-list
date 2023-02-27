import React, { useState, useContext } from 'react';
import AddBucket from '../AddBucket/AddBucket';
import Bucket from '../Bucket/Bucket';
import styles from './BucketList.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function BucketList({ filter }) {
  const [buckets, setBuckets] = useState([
    { id: '123', text: '스카이다이빙', status: 'active' },
    { id: '124', text: '금융지식', status: 'active' },
  ]);
  const { darkMode } = useContext(DarkModeContext);

  const handleAdd = (bucket) => setBuckets([...buckets, bucket]);

  const handleUpdate = (updated) => {
    setBuckets(
      buckets.map((bucket) => (bucket.id === updated.id ? updated : bucket))
    );
  };

  const handleDelete = (deleted) => {
    setBuckets(buckets.filter((b) => b.id !== deleted.id));
  };

  const filtered = getFilterItems(buckets, filter);

  return (
    <>
      <section
        className={`${styles.bucketlist}  ${
          darkMode === true && styles.darkMode
        }`}
      >
        <ul className={styles.list}>
          {filtered.map((item) => (
            <Bucket
              key={item.id}
              bucket={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <AddBucket onAdd={handleAdd} />
      </section>
    </>
  );
}
const getFilterItems = (buckets, filter) => {
  if (filter === 'all') return buckets;

  return buckets.filter((bucket) => bucket.status === filter);
};
