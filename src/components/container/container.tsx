import SideBar from "../sideBar/SideBar";
import UnitsRoute from "./unitsRoute/FormRoute";

interface Props {
  isDataFiltered: boolean;
}


const Container = ({ isDataFiltered }: Props) => {

  return (
    <div className="container">
      <div className="content">
        <SideBar />
        <UnitsRoute />
      </div>
    </div>
  )
}

export default Container
