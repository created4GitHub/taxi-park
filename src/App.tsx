import React, { useState } from 'react';

import Filters from './components/filters/filters';
import Header from './components/header/header';
import RenderCards from './module/render';

import "./app.scss";

const App: React.FC = () => {
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
