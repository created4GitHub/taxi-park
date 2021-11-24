import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import OptionTitles from "./components/optionTitles/OptionTitles";
import Header from "./components/header/header";

import Drivers from "./components/drivers/Drivers";
import Cars from "./components/cars/Cars";
import AddCar from './components/addition/addCar/addForm'
import AddDrivers from "./components/addition/addDrivers/addForm";

import { Context, getContext } from "./context";

import "./app.scss";

const App: React.FC = () => {
  
  const [context, setContext] = useState(false);
  const [get, setGet] = useState({});
  
  return (
    <>
      <Context.Provider value={[context, setContext]}> 
      <getContext.Provider value={[get, setGet]}>
          <Header />
        <div className="container">
          <div className="content">
          <OptionTitles />
            <div className="content__inform">
              <div className="table">
                <Routes>
                  { context ? < Route path="/drivers" element={< AddDrivers/>}/> : '' }
                  { context ? < Route path="/cars" element={< AddCar/>}/> : '' }
                </Routes>
                <Routes>
                  < Route path="/drivers" element={< Drivers/>}/>
                  < Route path="/cars" element={< Cars/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
        </getContext.Provider>
      </Context.Provider>
    </>
  );
};

export default App;
