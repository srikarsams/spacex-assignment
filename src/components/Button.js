import React from 'react';

// CSS
import "./Button.css";

export default function Button({ data, callback, activeData }) {
  return (
    <div
      className={`filter-button ${activeData === data ? "active" : ""}`}
      onClick={() => callback(data)}
    >
      {data}
    </div>
  )
}
