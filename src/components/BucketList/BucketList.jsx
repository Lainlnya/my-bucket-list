import React, { useState } from 'react';

export default function BucketList() {
  const [buckets, setBuckets] = useState([
    { id: '', text: '스카이다이빙', state: 'active' },
    { id: '', text: '금융지식', state: 'active' },
  ]);
  return (
    <>
      <section>
        <ul>
          {buckets.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
