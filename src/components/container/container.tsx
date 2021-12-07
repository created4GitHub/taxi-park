import { useSelector } from "react-redux";
import { useState } from "react";

import PathRout from "../pathRout/pathRoute";
import RouteComponents from "./routeComponents/RouteComponents";
import { RootState } from "../../store/rootReducer";

const Container = () => {
  const isAddNew = useSelector((state: RootState) => state.addNewReducer);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="content">
        <PathRout setIsFiltered={setIsFiltered} />
        <div className="content__inform">
          <div className="table">
            <RouteComponents isAddNew={isAddNew} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
