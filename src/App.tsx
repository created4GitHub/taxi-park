import React, { useState, useRef, MutableRefObject } from "react";

import Header from "./components/header/Header";
import { filteredDataContext } from "./context/context";

import "./app.scss";
import Container from "./components/appContainer/container";

const App: React.FC = () => {
  const [isFiltered, setIsFiltered] = useState<boolean>(true);
  const data: MutableRefObject<never[]> = useRef([]);
  const isDataEmpty: MutableRefObject<boolean> = useRef(true);

  return (
    <>
        <filteredDataContext.Provider
          value={{
            filter: [isFiltered, setIsFiltered],
            data: data,
            isDataEmpty: isDataEmpty,
          }}
        >
          <Header />
          <Container/>
        </filteredDataContext.Provider>
    </>
  );
};

export default App;
