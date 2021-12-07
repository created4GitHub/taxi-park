import { useSelector } from "react-redux";
import { useState } from "react";

import SideBar from "../sideBar/SideBar";
import FormRoute from "./formRoute/FormRoute";
import { RootState } from "../../store/rootReducer";

const Container = () => {
  const isAddNew = useSelector((state: RootState) => state.isAddNewReducer);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="content">
        <SideBar setIsFiltered={setIsFiltered} />
        <FormRoute isAddNew={isAddNew} />
      </div>
    </div>
  )
}

export default Container
