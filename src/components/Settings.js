import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Settings.css";
const Settings = () => {
  const [importData, setImportData] = useState("");
  const [exportedCoffeePlaces, setExportedCoffeePlaces] = useState("");
  const [exportedCoffeeBeans, setExportedCoffeeBeans] = useState("");
  const navigate = useNavigate();

  const handleExportCoffeePlaces = () => {
    const coffeePlaces =
      localStorage.getItem("coffeePlaces") || "No data found";
    setExportedCoffeePlaces(coffeePlaces);
  };

  const handleExportCoffeeBeans = () => {
    const coffeeBeans = localStorage.getItem("coffeeBeans") || "No data found";
    setExportedCoffeeBeans(coffeeBeans);
  };

  const handleImportData = (type) => {
    try {
      const parsedData = JSON.parse(importData);
      if (Array.isArray(parsedData)) {
        if (type === "places") {
          const existingPlaces =
            JSON.parse(localStorage.getItem("coffeePlaces")) || [];
          localStorage.setItem(
            "coffeePlaces",
            JSON.stringify([
              ...existingPlaces,
              ...parsedData.filter((item) => item.brand),
            ])
          );
        }

        if (type === "beans") {
          const existingBeans =
            JSON.parse(localStorage.getItem("coffeeBeans")) || [];
          localStorage.setItem(
            "coffeeBeans",
            JSON.stringify([
              ...existingBeans,
              ...parsedData.filter((item) => item.city),
            ])
          );
        }

        alert("Data imported successfully!");
        setImportData("");
      } else {
        alert("Please provide valid JSON data.");
      }
    } catch (error) {
      alert("Error importing data. Please ensure the JSON is valid.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy: ", err);
      });
  };

  return (
    <div className="settings">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>
      <h2>App Settings</h2>
      <button onClick={handleExportCoffeePlaces}>
        Export Coffee Place Data
      </button>
      <div
        className="exported-data"
        onClick={() => copyToClipboard(exportedCoffeePlaces)}
        style={{ cursor: "pointer" }}
      >
        {exportedCoffeePlaces && <p>{`${exportedCoffeePlaces}`}</p>}
      </div>

      <button onClick={handleExportCoffeeBeans}>Export Coffee Bean Data</button>
      <div
        className="exported-data"
        onClick={() => copyToClipboard(exportedCoffeeBeans)}
        style={{ cursor: "pointer" }}
      >
        {exportedCoffeeBeans && <p>{`${exportedCoffeeBeans}`}</p>}
      </div>

      <h3>Import Coffee Data</h3>
      <textarea
        value={importData}
        onChange={(e) => setImportData(e.target.value)}
        rows="5"
        placeholder="Paste your JSON data here..."
      />
      <button onClick={() => handleImportData("places")}>
        Import Coffee Places Data
      </button>
      <button onClick={() => handleImportData("beans")}>
        Import Coffee Beans Data
      </button>
    </div>
  );
};

export default Settings;
