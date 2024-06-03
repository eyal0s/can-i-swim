"use client";

import React, { useState, useEffect } from 'react';

// Dummy data for beaches - in a real application, this would be fetched from an API
const beaches = [
    "Zikim Beach - Ashkelon",
    "Ashkelon Beach - Ashkelon",
    "Hof Nitzanim Beach - Ashkelon",
    "Ashdod Beach - Ashdod",
    "Palmachim Beach - Rishon LeZion",
    "Hof Palmachim Beach - Rishon LeZion",
    "Bat Yam Beach - Bat Yam",
    "Alma Beach - Tel Aviv",
    "Banana Beach - Tel Aviv",
    "Frishman Beach - Tel Aviv",
    "Gordon Beach - Tel Aviv",
    "Hilton Beach - Tel Aviv",
    "Jerusalem Beach - Tel Aviv",
    "Metzitzim Beach - Tel Aviv",
    "Bograshov Beach - Tel Aviv",
    "Tzuk Beach - Herzliya",
    "Herzliya Beach - Herzliya",
    "HaSharon Beach - Herzliya",
    "Sironit Beach - Netanya",
    "Beit Yanai Beach - Netanya",
    "Poleg Beach - Netanya",
    "Michmoret Beach - Michmoret",
    "Mevo'ot Yam Beach - Michmoret",
    "Giv'at Olga Beach - Hadera",
    "Caesarea Aqueduct Beach - Caesarea",
    "Tantura Beach - Dor",
    "Dor Beach - Dor",
    "Nahsholim Beach - Nahsholim",
    "Habonim Dor Beach - Haifa",
    "Hof HaBonim Beach - Haifa",
    "Hof Dor Habonim Beach - Haifa",
    "Dado Beach - Haifa",
    "Haifa Bat Galim Beach - Haifa",
    "Hof Hacarmel Beach - Haifa",
    "Kiryat Haim Beach - Haifa",
    "Kiryat Yam Beach - Haifa",
    "Shavei Tzion Beach - Acre",
    "Achziv Beach - Nahariya"
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