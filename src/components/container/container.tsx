import SideBar from "../sideBar/SideBar";
import UnitsRoute from "./unitsRoute/FormRoute";

interface Props {
  isRerender: boolean;
}

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
