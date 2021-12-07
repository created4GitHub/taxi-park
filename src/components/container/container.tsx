import { useSelector } from "react-redux";

import SideBar from "../sideBar/SideBar";
import UnitsRoute from "./unitsRoute/FormRoute";
import { RootState } from "../../store/rootReducer";

interface Props {
  isRerender: boolean;
}

const Container = ({ isRerender }: Props) => {
  const isAddNew = useSelector((state: RootState) => state.isAddNewReducer);

  return (
    <div className="container">
      <div className="content">
        <SideBar />
        <UnitsRoute isAddNew={isAddNew} />
      </div>
    </div>
  )
}

export default Container
