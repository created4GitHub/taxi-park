import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./store/rootReducer";
import Header from "./components/header/Header";
import Container from "./components/container/container";

import "./app.scss";

const App: React.FC = () => {
  const isDataFiltered = useSelector((state: RootState) => state.isDataFiltered);

  return (
    <>
      <Header />
      <Container isDataFiltered={isDataFiltered} />
    </>
  );
};

export default App;
