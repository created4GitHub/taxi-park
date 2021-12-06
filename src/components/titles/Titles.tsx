import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Filter from "../filters/Filters";
import Title from "./title/Title";

const TitlesOptions = () => {
  const [isActive, setIsActive] = useState<string>("");

  return (
    <div className="content__options">
      <div className="content__options-paragraph">
        <Title
          title="Drivers"
          link={"/drivers"}
          state={{ isActive, setIsActive }}
        />
        <Title
          title="Cars"
          link={"/cars"}
          state={{ isActive, setIsActive }}
        />
      </div>
      <Routes>
        <Route path="/drivers" element={<Filter title="driver" />} />
        <Route path="/cars" element={<Filter title="car" />} />
      </Routes>
    </div>
  );
};

export default TitlesOptions;
