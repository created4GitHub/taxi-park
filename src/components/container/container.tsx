import SideBar from "../sideBar/SideBar";
import UnitsRoute from "../UnitsRoute/unitsRoute";

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

export default Container;
