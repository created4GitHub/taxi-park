import React, { useState } from "react";

import Filters from "./components/filters/Filter";
import Header from "./components/header/header";

import { Context } from "./context";

import Form from "./components/form/Form";
import FormNames from "./components/titles/Titles";
import "./app.scss";

const App: React.FC = () => {

  const [context, setContext] = useState(false);

  return (
    <Context.Provider value={[context, setContext]}> 
      <>
        <header className="header">
          <Header />
        </header>
        <div className="container">
          <div className="content">
            <Filters />
            <div className="content__inform">
              <FormNames />
              <Form />
            </div>
          </div>
        </div>
      </>
    </Context.Provider>
  );
};

export default App;
