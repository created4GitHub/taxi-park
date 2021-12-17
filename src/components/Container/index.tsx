import SideBar from "../SideBar";
import UnitsRoute from "../UnitsRoute";

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
