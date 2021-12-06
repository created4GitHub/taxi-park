import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import PathRout from "../pathRout/pathRoute";
import FormUnits from "../formUnits/FormUnits";
import AddNewUnit from "../addNewUnit/AddNewUnit";
import { RootState } from "../../store/rootReducer";
import { useState } from "react";

const Container = () => {
  const isAddNew = useSelector((state: RootState) => state.addNewReducer);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="content">
        <PathRout setIsFiltered={setIsFiltered} />
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
