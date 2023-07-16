import React from 'react';
import './App.css';
import icon from './logo-af-64.png';
import FlowersPage from "./flowers/FlowersPage";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import CookingPage from "./cooking/CookingPage";
import CropsPage from "./crops/CropsPage";


function App() {
  return (
      <Router>
          <header className="sticky">
              <span className="logo">
                  <img src={icon} alt="logo" width="64" height="64" />
              </span>
              <NavLink to={process.env.PUBLIC_URL + '/'} className="button rounded">
                  <span className="icon-home"></span>
                  Home
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/flowers"} className="button rounded">
                  Flowers
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/cooking"} className="button rounded">
                  Cooking
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/crops"} className="button rounded">
                  Crops
              </NavLink>
          </header>
          <div className="container">
              <Routes>
                  <Route path={process.env.PUBLIC_URL + '/'} element={<CropsPage />} />
                  <Route path={process.env.PUBLIC_URL + "/flowers"} element={<FlowersPage />} />
                  <Route path={process.env.PUBLIC_URL + "/cooking"} element={<CookingPage />} />
                  <Route path={process.env.PUBLIC_URL + "/crops"} element={<CropsPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
