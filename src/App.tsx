import React from "react";

import Header from "./components/header/Header";
import Container from "./components/appContent/container";

import "./app.scss";

const App: React.FC = () => {

  return (
    <>
      <Header />
      <Container />
    </>
  );
};

export default App;
