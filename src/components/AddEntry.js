// src/components/AddEntry.js
import React, { useState } from "react";
import "../styles/AddEntry.css";

const AddEntry = ({ addCoffeePlace, addCoffeeBean }) => {
  const [entryType, setEntryType] = useState("place");
  const [place, setPlace] = useState({
    name: "",
    city: "",
    rating: "",
    personalNote: "",
  });
  const [bean, setBean] = useState({
    brand: "",
    city: "",
    notes: "",
    rating: "",
    personalNote: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [isButtonFocused, setIsButtonFocused] = useState(false); // State for button focus

  const handlePlaceSubmit = (e) => {
    e.preventDefault();
    addCoffeePlace(place);
    setPlace({ name: "", city: "", rating: "", personalNote: "" });
  };

  const handleBeanSubmit = (e) => {
    e.preventDefault();
    addCoffeeBean(bean);
    setBean({
      brand: "",
      city: "",
      notes: "",
      rating: "",
      personalNote: "",
    });
  };

  return (
    <div className="add-entry-container">
      <h3 className="heading">Enter Coffee Experience</h3>
      <div className="custom-radio-container">
        <label
          className={`custom-radio ${entryType === "place" ? "active" : ""}`}
          onClick={() => setEntryType("place")}
        >
          <input
            type="radio"
            value="place"
            checked={entryType === "place"}
            onChange={() => setEntryType("place")}
            style={{ display: "none" }} // Hide default radio button
          />
          Coffee Place
        </label>
        <label
          className={`custom-radio ${entryType === "bean" ? "active" : ""}`}
          onClick={() => setEntryType("bean")}
        >
          <input
            type="radio"
            value="bean"
            checked={entryType === "bean"}
            onChange={() => setEntryType("bean")}
            style={{ display: "none" }} // Hide default radio button
          />
          Coffee Bean
        </label>
      </div>

      {entryType === "place" ? (
        <form onSubmit={handlePlaceSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={place.name}
            onChange={(e) => setPlace({ ...place, name: e.target.value })}
            required
            className={`input ${focusedInput === "name" ? "focused" : ""}`}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="text"
            placeholder="City"
            value={place.city}
            onChange={(e) => setPlace({ ...place, city: e.target.value })}
            required
            className={`input ${focusedInput === "city" ? "focused" : ""}`}
            onFocus={() => setFocusedInput("city")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Rating (out of 5)"
            value={place.rating}
            onChange={(e) => setPlace({ ...place, rating: e.target.value })}
            required
            className={`input ${focusedInput === "rating" ? "focused" : ""}`}
            onFocus={() => setFocusedInput("rating")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="text"
            placeholder="Personal Note (optional)"
            value={place.personalNote}
            onChange={(e) =>
              setPlace({ ...place, personalNote: e.target.value })
            }
            className={`input ${
              focusedInput === "personalNote" ? "focused" : ""
            }`}
            onFocus={() => setFocusedInput("personalNote")}
            onBlur={() => setFocusedInput(null)}
          />
          <button
            type="submit"
            className={`submit-button ${isButtonFocused ? "focused" : ""}`}
            onFocus={() => setIsButtonFocused(true)} // Set button focus state
            onBlur={() => setIsButtonFocused(false)} // Reset button focus state
          >
            Add Place
          </button>
        </form>
      ) : (
        <form onSubmit={handleBeanSubmit}>
          <input
            type="text"
            placeholder="Brand"
            value={bean.brand}
            onChange={(e) => setBean({ ...bean, brand: e.target.value })}
            required
            className={`input ${focusedInput === "brand" ? "focused" : ""}`}
            onFocus={() => setFocusedInput("brand")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="text"
            placeholder="City"
            value={bean.city}
            onChange={(e) => setBean({ ...bean, city: e.target.value })}
            required
            className={`input ${focusedInput === "city" ? "focused" : ""}`}
            onFocus={() => setFocusedInput("city")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="text"
            placeholder="Notes"
            value={bean.notes}
            onChange={(e) => setBean({ ...bean, notes: e.target.value })}
            className={`input ${focusedInput === "notes" ? "focused" : ""}`}
            onFocus={() => setFocusedInput("notes")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Rating (out of 5)"
            value={bean.rating}
            onChange={(e) => setBean({ ...bean, rating: e.target.value })}
            required
            className={`input ${
              focusedInput === "beanRating" ? "focused" : ""
            }`}
            onFocus={() => setFocusedInput("beanRating")}
            onBlur={() => setFocusedInput(null)}
          />
          <input
            type="text"
            placeholder="Personal Note (optional)"
            value={bean.personalNote}
            onChange={(e) => setBean({ ...bean, personalNote: e.target.value })}
            className={`input ${
              focusedInput === "beanPersonalNote" ? "focused" : ""
            }`}
            onFocus={() => setFocusedInput("beanPersonalNote")}
            onBlur={() => setFocusedInput(null)}
          />
          <button
            type="submit"
            className={`submit-button ${isButtonFocused ? "focused" : ""}`}
            onFocus={() => setIsButtonFocused(true)} // Set button focus state
            onBlur={() => setIsButtonFocused(false)} // Reset button focus state
          >
            Add Bean
          </button>
        </form>
      )}
    </div>
  );
};

export default AddEntry;
