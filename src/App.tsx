import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import OptionTitles from "./components/optionTitles/OptionTitles";
import Header from "./components/header/header";

import Drivers from "./components/drivers/Drivers";
import Cars from "./components/cars/Cars";
import AddCar from "./components/addition/addCar/addForm";
import AddDrivers from "./components/addition/addDrivers/addForm";

import { Context, receivedDataContext, filteredDataContext } from "./context";

import "./app.scss";

const App: React.FC = () => {
  const [context, setContext] = useState(false);
  const [receivedData, setReceivedData] = useState({});
  const [isFiltered, setIsFiltered] = useState(true);
  const data = useRef([]);
  const isDataEmpty = useRef(false);

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <receivedDataContext.Provider value={[receivedData, setReceivedData]}>
          <filteredDataContext.Provider
            value={{
              filter: [isFiltered, setIsFiltered],
              data: data,
              isDataEmpty: isDataEmpty,
            }}
          >
            <Header />
            <div className="container">
              <div className="content">
                <OptionTitles />
                <div className="content__inform">
                  <div className="table">
                    <Routes>
                      {context ? (
                        <Route path="/drivers" element={<AddDrivers />} />
                      ) : (
                        ""
                      )}
                      {context ? (
                        <Route path="/cars" element={<AddCar />} />
                      ) : (
                        ""
                      )}
                    </Routes>
                    <Routes>
                      <Route path="/drivers" element={<Drivers />} />
                      <Route path="/cars" element={<Cars />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </filteredDataContext.Provider>
        </receivedDataContext.Provider>
      </Context.Provider>
    </>
  );
};

export default App;
