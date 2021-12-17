import { useState } from "react";

import Pages from "./Pages"
import FilterRoutes from "./FilterRoutes"

const SideBar = () => {
  const [activePage, setIsactivePage] = useState<string>("");

  return (
    <div className="content__options">
      <Pages activePage={activePage}
        setIsactivePage={setIsactivePage}
      />
      <FilterRoutes />
    </div>
  );
};

export default SideBar;
