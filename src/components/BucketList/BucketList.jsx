import React, { useState, useEffect } from 'react';
import AddBucket from '../AddBucket/AddBucket';
import Bucket from '../Bucket/Bucket';
import styles from './BucketList.module.css';

export default function BucketList({ filter }) {
  const [buckets, setBuckets] = useState(() => readBuckets());

  useEffect(() => {
    localStorage.setItem('buckets', JSON.stringify(buckets));
  }, [buckets]);

  const handleAdd = (bucket) => {
    setBuckets([...buckets, bucket]);
  };

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
      <section className={styles.bucketlist}>
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

const readBuckets = () => {
  let buckets = localStorage.getItem('buckets');
  return buckets ? JSON.parse(buckets) : [];
};
