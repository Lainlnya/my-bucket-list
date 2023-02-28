import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import AddBucket from '../AddBucket/AddBucket';
import Bucket from '../Bucket/Bucket';
import styles from './BucketList.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function BucketList({ filter }) {
  const [buckets, setBuckets] = useImmer([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.length !== 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let bucket = JSON.parse(localStorage.getItem(localStorage.key(i)));
        setBuckets((buckets) => {
          buckets.push(bucket);
        });
      }
    }
  }, []);

  const handleAdd = (bucket) => {
    localStorage.setItem(
      bucket.id,
      JSON.stringify({
        id: bucket.id,
        text: bucket.text,
        status: 'active',
      })
    );

    setBuckets([...buckets, bucket]);
  };

  const handleUpdate = (updated) => {
    setBuckets(
      buckets.map((bucket) => (bucket.id === updated.id ? updated : bucket))
    );
    localStorage.setItem(
      updated.id,
      JSON.stringify({
        id: updated.id,
        text: updated.text,
        status: updated.status,
      })
    );
  };

  const handleDelete = (deleted) => {
    setBuckets(buckets.filter((b) => b.id !== deleted.id));
    localStorage.removeItem(deleted.id);
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
