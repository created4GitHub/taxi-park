import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import TitlesOptions from "../titles/Titles";
import FormUnits from "../../components/formUnits/FormUnits";
import AddNewUnit from "../../components/addNewUnit/AddNewUnit";
import { RootState } from "../../store/rootReducer";

const Container = () => {
    const isAddNew = useSelector((state: RootState) => state.addNewReducer);

    return (
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
                      <FormUnits title={"car"} />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Container
