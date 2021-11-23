import React, { useState } from "react";
<<<<<<< HEAD
=======
import { Routes, Route, Link } from "react-router-dom";
>>>>>>> origin/git-status

import Filters from "./components/filters/Filter";
import Header from "./components/header/header";

import { Context } from "./context";

<<<<<<< HEAD
import Form from "./components/form/Form";
import FormNames from "./components/titles/Titles";
=======
>>>>>>> origin/git-status
import "./app.scss";

const App: React.FC = () => {

  const [context, setContext] = useState(false);

  return (
<<<<<<< HEAD
    <Context.Provider value={[context, setContext]}> 
      <>
=======
    <>
      <Context.Provider value={[context, setContext]}> 
>>>>>>> origin/git-status
        <header className="header">
          <Header />
        </header>
        <div className="container">
          <div className="content">
            <Filters />
            <div className="content__inform">
<<<<<<< HEAD
              <FormNames />
              <Form />
            </div>
          </div>
        </div>
      </>
    </Context.Provider>
=======
              <Routes>
                < Route path="/drivers" element={< Drivers/>}/>
                < Route path="/cars" element={< Cars/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
>>>>>>> origin/git-status
  );
};

export default App;
