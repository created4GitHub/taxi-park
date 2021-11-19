import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Filters from './components/filters/filters';
// import { Button } from "./components/button/index";
import Header from './components/header/header';

import RenderCards from './module/render';
import "./app.scss";

const App: React.FC = () => {
    // const [exact, setExact] = useState<exact>([{
    // }])

    return (
        <>
        <header className="header">
            <Header/>
        </header>
        <div className="container">
            <div className="content">
                <Filters/>
                <div className="content__inform">
                    <RenderCards />
                </div>
            </div>
        </div>
        </>
    )
}

export default App;
