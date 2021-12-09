import SideBar from "../sideBar/SideBar";
import UnitsRoute from "./unitsRoute/FormRoute";

const Container = () => {

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
