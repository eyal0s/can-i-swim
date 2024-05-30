"use client";

import React, { useState, useEffect } from 'react';

// Dummy data for beaches - in a real application, this would be fetched from an API
const beaches = [
  'Poleg Beach',
  'Hadromi',
  'Gordon Beach',
  'Frishman Beach',
  'Banana Beach',
  'Hilton Beach',
  'Herzliya Beach',
  'Achziv Beach',
  'Dor Beach',
  'Kinneret Beach'
];

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      const filteredSuggestions = beaches.filter(beach =>
        beach.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    setShowSuggestions(true);
  };

  const handleClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter beach name"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}