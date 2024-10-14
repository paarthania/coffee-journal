import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EntryDetail.css";
const EntryDetail = ({ entries, type, deleteEntry }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entry = entries[parseInt(id)];

  if (!entry) return <p>Entry not found.</p>;

  return (
    <div className="entry-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>
      <h2 className="entry-detail-title">
        {type === "place" ? entry.name : entry.brand}
      </h2>
      <p className="entry-detail-rating">
        <strong>Rating:</strong> {entry.rating} ⭐
      </p>
      {type === "place" ? (
        <>
          <p className="entry-detail-city">
            <strong>City:</strong> {entry.city}
          </p>
          <p className="entry-detail-note">
            <strong>Personal Note:</strong> {entry.personalNote}
          </p>
        </>
      ) : (
        <>
          <p className="entry-detail-city">
            <strong>City:</strong> {entry.city}
          </p>
          <p className="entry-detail-notes">
            <strong>Notes:</strong> {entry.notes}
          </p>
          <p className="entry-detail-note">
            <strong>Personal Note:</strong> {entry.personalNote}
          </p>
        </>
      )}
      <button
        className="delete-button-detail"
        onClick={() => {
          deleteEntry(type, parseInt(id));
          navigate("/");
        }}
      >
        Delete Entry
      </button>
    </div>
  );
};

export default EntryDetail;
