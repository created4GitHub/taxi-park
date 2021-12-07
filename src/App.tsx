import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./store/rootReducer";
import Header from "./components/header/Header";
import Container from "./components/container/container";

import "./app.scss";


const App: React.FC = () => {
  const isRerender = useSelector((state: RootState) => state.rerenderReducer);

  return (
    <>
      <Header />
      <Container isRerender={isRerender} />
    </>
  );
};

export default App;
