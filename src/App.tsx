import React, { useState, useRef, MutableRefObject } from "react";
import { Routes, Route } from "react-router-dom";

import OptionTitles from "./components/titles/TitlesOptions";
import Header from "./components/header/Header";
import { ModalContext, receivedDataContext, filteredDataContext } from "./context";
import FormDrivers from "./components/titles/drivers/FormDrivers";
import FormCars from "./components/titles/cars/FormCars";
import AddCar from "./components/addNewUnit/addCar/addCar";
import AddDrivers from "./components/addNewUnit/addDrivers/addDriver";

import { Info } from "./interfaces";

import "./app.scss";

const App: React.FC = () => {
  const [modalContext, setContext] = useState<boolean>(false);
  const [receivedData, setReceivedData] = useState(new Array<Info>());
  const [isFiltered, setIsFiltered] = useState<boolean>(true);
  const data: MutableRefObject<never[]> = useRef([]);
  const isDataEmpty: MutableRefObject<boolean> = useRef(true);

  return (
    <>
      <ModalContext.Provider value={[modalContext, setContext]}>
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
                      {modalContext ? (
                        <Route path="/drivers" element={<AddDrivers />} />
                      ) : (
                        ""
                      )}
                      {modalContext ? (
                        <Route path="/cars" element={<AddCar />} />
                      ) : (
                        ""
                      )}
                    </Routes>
                    <Routes>
                      <Route path="/drivers" element={<FormDrivers />} />
                      <Route path="/cars" element={<FormCars />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </filteredDataContext.Provider>
        </receivedDataContext.Provider>
      </ModalContext.Provider>
    </>
  );
};

export default App;
