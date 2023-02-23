import './App.css';
import Header from './components/Header/Header';
import BucketList from './components/BucketList/BucketList';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <BucketList filter={filter} />
    </>
  );
}

export default App;
