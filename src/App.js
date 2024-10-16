import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Album from "./components/Album";
import AddEntry from "./components/AddEntry";
import EntryDetail from "./components/EntryDetail";
import Settings from "./components/Settings";

import "./App.css";

const App = () => {
  const [coffeePlaces, setCoffeePlaces] = useState([]);
  const [coffeeBeans, setCoffeeBeans] = useState([]);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("coffeePlaces")) || [];
    const storedBeans = JSON.parse(localStorage.getItem("coffeeBeans")) || [];
    setCoffeePlaces(storedPlaces);
    setCoffeeBeans(storedBeans);
  }, []);

  const addCoffeePlace = (place) => {
    const updatedPlaces = [...coffeePlaces, place];
    setCoffeePlaces(updatedPlaces);
    localStorage.setItem("coffeePlaces", JSON.stringify(updatedPlaces));
  };

  const addCoffeeBean = (bean) => {
    const updatedBeans = [...coffeeBeans, bean];
    setCoffeeBeans(updatedBeans);
    localStorage.setItem("coffeeBeans", JSON.stringify(updatedBeans));
  };

  const deleteEntry = (type, index) => {
    if (type === "place") {
      const updatedPlaces = coffeePlaces.filter((_, i) => i !== index);
      setCoffeePlaces(updatedPlaces);
      localStorage.setItem("coffeePlaces", JSON.stringify(updatedPlaces));
    } else {
      const updatedBeans = coffeeBeans.filter((_, i) => i !== index);
      setCoffeeBeans(updatedBeans);
      localStorage.setItem("coffeeBeans", JSON.stringify(updatedBeans));
    }
  };

  return (
    <Router>
      <div className="App">
        <h1 className="app-title">Coffee Album</h1>
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                addCoffeePlace={addCoffeePlace}
                addCoffeeBean={addCoffeeBean}
                coffeePlaces={coffeePlaces}
                coffeeBeans={coffeeBeans}
                deleteEntry={deleteEntry}
              />
            }
          />
          <Route
            path="/places/:id"
            element={
              <EntryDetail
                entries={coffeePlaces}
                type="place"
                deleteEntry={deleteEntry}
              />
            }
          />
          <Route
            path="/beans/:id"
            element={
              <EntryDetail
                entries={coffeeBeans}
                type="bean"
                deleteEntry={deleteEntry}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainContent = ({
  addCoffeePlace,
  addCoffeeBean,
  coffeePlaces,
  coffeeBeans,
  deleteEntry,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <AddEntry addCoffeePlace={addCoffeePlace} addCoffeeBean={addCoffeeBean} />
      <Album
        title="Coffee Places"
        entries={coffeePlaces}
        deleteEntry={(index) => deleteEntry("place", index)}
        navigateToDetail={(index) => navigate(`/places/${index}`)}
      />
      <Album
        title="Coffee Beans"
        entries={coffeeBeans}
        deleteEntry={(index) => deleteEntry("bean", index)}
        navigateToDetail={(index) => navigate(`/beans/${index}`)}
      />
      <button
        style={{
          backgroundColor: "#4a148c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "9px 9px 9px 9px",
          maxWidth: "120px",
          cursor: "pointer",
          margin: "40px 0 20px 210px",
          fontWeight: "500",
          transition: "background-color 0.3s",
        }}
        onClick={() => navigate("/settings")}
      >
        App Settings
      </button>{" "}
    </>
  );
};

export default App;
