"use client";

import React from 'react';
import '../styles/loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="sky">
        <div className="sun">☀️</div>
        <div className="beach">
          <div className="crab-1">🦀</div>
          <div className="crab-2">🦀</div>
          <div className="crab-3">🦀</div>
        </div>
        <div className="water">
          <div className="swimmer">🏊</div>
        </div>
      </div>
    </div>
  );
}