"use client";
import React from 'react';
import { useState } from 'react';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';

export default function Home() {
  const [beach, setBeach] = useState('');

  const handleSearch = (selectedBeach) => {
    setBeach(selectedBeach);
  };

  return (
    <Layout>
      <h1>Is it a Good Day to Swim?</h1>
      <SearchBar onSearch={handleSearch} />
      {beach && (
        <div>
          <a href={`/beach/${beach}`}>Check the swim conditions for {beach}</a>
        </div>
      )}
    </Layout>
  );
}