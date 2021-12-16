import SideBar from "../sideBar/SideBar";
import UnitsRoute from "../UnitsRoute/UnitsRoute";

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
