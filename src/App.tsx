import React from "react";

import Filters from "./components/filters/filters";
import Header from "./components/header/header";

import Form from "./components/form/Form";
import "./app.scss";

const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="container">
        <div className="content">
          <Filters />
          <div className="content__inform">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
