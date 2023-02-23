import React, { useState } from 'react';
import AddBucket from '../AddBucket/AddBucket';

export default function BucketList() {
  const [buckets, setBuckets] = useState([
    { id: '123', text: '스카이다이빙', state: 'active' },
    { id: '124', text: '금융지식', state: 'active' },
  ]);

  const handleAdd = (bucket) => setBuckets([...buckets, bucket]);

  return (
    <>
      <section>
        <ul>
          {buckets.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <AddBucket onAdd={handleAdd} />
      </section>
    </>
  );
}
