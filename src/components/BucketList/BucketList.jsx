import React, { useState } from 'react';
import AddBucket from '../AddBucket/AddBucket';
import Bucket from '../Bucket/Bucket';

export default function BucketList() {
  const [buckets, setBuckets] = useState([
    { id: '123', text: '스카이다이빙', state: 'active' },
    { id: '124', text: '금융지식', state: 'active' },
  ]);

  const handleAdd = (bucket) => setBuckets([...buckets, bucket]);

  const handleUpdate = (updated) => {
    setBuckets(
      buckets.map((bucket) => (bucket.id === updated.id ? updated : bucket))
    );
  };

  const handleDelete = (deleted) => {
    setBuckets(buckets.filter((b) => b.id !== deleted.id));
  };

  return (
    <>
      <section>
        <ul>
          {buckets.map((item) => (
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
