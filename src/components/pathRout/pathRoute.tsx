import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Filter from "../filters/Filters";
import ButtonPath from "./buttonPath";

interface Props {
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

const PathRout = ({ setIsFiltered }: Props) => {
  const [isActive, setIsActive] = useState<string>("");

  return (
    <div className="content__options">
      <div className="content__options-paragraph">
        <ButtonPath
          title="Drivers"
          link={"/drivers"}
          state={{ isActive, setIsActive }}
        />
        <ButtonPath
          title="Cars"
          link={"/cars"}
          state={{ isActive, setIsActive }}
        />
      </div>
      <Routes>
        <Route path="/drivers" element={<Filter title="driver" setIsFiltered={setIsFiltered} />} />
        <Route path="/cars" element={<Filter title="car" setIsFiltered={setIsFiltered} />} />
      </Routes>
    </div>
  );
};

export default PathRout;
