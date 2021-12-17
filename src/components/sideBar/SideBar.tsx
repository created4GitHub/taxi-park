import { useState } from "react";

import MainTitles from "./mainTitles/MainTitles"
import FilterRoutes from "./filterRoutes/FilterRoutes"

const SideBar = () => {
  const [activeTitle, setIsActive] = useState<string>("");

  return (
    <div className="content__options">
      <MainTitles activeTitle={activeTitle} 
        setIsActive={setIsActive} 
      />
      <FilterRoutes />
    </div>
  );
};

export default SideBar;
