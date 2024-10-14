// src/components/Album.js
import React from "react";
import Entry from "./Entry";
import "../styles/Album.css";

const Album = ({ title, entries, deleteEntry, navigateToDetail }) => {
  return (
    <div className="album">
      <h2 className="album-title">{title}</h2>
      {entries.length === 0 ? (
        <p className="no-entries-message">No entries yet!</p>
      ) : (
        <ul className="album-list">
          {entries.map((entry, index) => (
            <Entry
              key={index}
              entry={entry}
              deleteEntry={() => deleteEntry(index)}
              navigateToDetail={() => navigateToDetail(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Album;
