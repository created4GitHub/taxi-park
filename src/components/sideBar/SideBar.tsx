import { useState } from "react";

import MainTitles from "./mainTitles/MainTitles"
import FilterRoutes from "./filterRoutes/FilterRoutes"

const SideBar = () => {
  const [isActive, setIsActive] = useState<string>("");

  return (
    <div className="content__options">
      <MainTitles isActive={isActive} setIsActive={setIsActive} />
      <FilterRoutes />
    </div>
  );
};

export default SideBar;
