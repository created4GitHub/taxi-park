import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Filters from "./components/filters/Filter";
import Header from "./components/header/header";
import Drivers from "./components/drivers/Drivers";
import Cars from "./components/cars/Cars";

import "./app.scss";

const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="container">
        <div className="content">
          <Filters />
          <div className="content__inform">
          <Routes>
        < Route path="/drivers" element={< Drivers/>}/>
        < Route path="/cars" element={< Cars/>}/>
      </Routes>
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
