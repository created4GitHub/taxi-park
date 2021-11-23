import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import OptionTitles from "./components/optionTitles/OptionTitles";
import Header from "./components/header/header";
import Drivers from "./components/drivers/Drivers";
import Cars from "./components/cars/Cars";

import { Context } from "./context";

import "./app.scss";

const App: React.FC = () => {

  const [context, setContext] = useState(false);

  return (
    <>
      <Context.Provider value={[context, setContext]}> 
        <header className="header">
          <Header />
        </header>
        <div className="container">
          <div className="content">
          <div className="content__options">
          <OptionTitles />
          </div>
            <div className="content__inform">
            <div className="table">
              <Routes>
                < Route path="/drivers" element={< Drivers/>}/>
                < Route path="/cars" element={< Cars/>}/>
              </Routes>
              </div>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
