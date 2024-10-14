import React from "react";
import "../styles/Entry.css";

const Entry = ({ entry, deleteEntry, navigateToDetail }) => {
  return (
    <li className="entry" onClick={navigateToDetail}>
      <p className="entry-text">
        {entry.name || entry.brand} - {entry.rating} ⭐
      </p>
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation();
          deleteEntry();
        }}
      >
        -
      </button>
    </li>
  );
};

export default Entry;
