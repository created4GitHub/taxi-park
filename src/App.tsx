import React, { useState, useRef, MutableRefObject } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/header/Header";
import TitlesOptions from "./components/titles/Titles";
import FormUnits from "./components/formUnits/FormUnits";

import { receivedDataContext, filteredDataContext } from "./context";
import { Info } from "./interfaces";
import { RootState } from "./store/rootReducer";

import "./app.scss";
import AddNewUnit from "./components/addNewUnit/AddNewUnit";

const App: React.FC = () => {
  const [receivedData, setReceivedData] = useState(new Array<Info>());
  const [isFiltered, setIsFiltered] = useState<boolean>(true);
  const data: MutableRefObject<never[]> = useRef([]);
  const isDataEmpty: MutableRefObject<boolean> = useRef(true);
  const isAddNew = useSelector((state: RootState) => state.addNewReducer);

  return (
    <>
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
              <TitlesOptions />
              <div className="content__inform">
                <div className="table">
                  <Routes>
                    <Route
                      path="/drivers"
                      element={
                        <>
                          {isAddNew && <AddNewUnit title={"driver"} />}
                          <FormUnits title={"driver"} />
                        </>
                      }
                    />
                    <Route
                      path="/cars"
                      element={
                        <>
                          {isAddNew && <AddNewUnit title={"car"} />}
                          <FormUnits title={"driver"} />
                        </>
                      }
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </filteredDataContext.Provider>
      </receivedDataContext.Provider>
    </>
  );
};

export default App;
