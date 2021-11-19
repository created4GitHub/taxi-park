import React, { useState, SetStateAction, Dispatch } from 'react';

import Filters from './components/filters/filters';
import Test from './module/render';
import Header from './components/header/header';

import driversPNG from './img/drivers.png';
import carsPNG from './img/cars.png';
import "./app.scss";

const App: React.FC = () => {
    const [activeButton, setActiveButton]: [string, Dispatch<SetStateAction<string>>] = useState('');

    return (
        <>
        <header className="header">
            <Header/>
        </header>
        <div className="container">
            <div className="content">
                <div className="content__options">
                    <div className="content__options-paragraph">

                    <p className={activeButton !== 'Drivers' ? "options-paragraph" : "options-paragraph active"} onClick={() => {setActiveButton('Drivers')}}>
                        <img className='options-img' src={driversPNG} alt="alt" /> 
                    Drivers</p>

                    <p className={activeButton !== 'Cars' ? "options-paragraph" : "options-paragraph active"} onClick={() => {setActiveButton('Cars')}}>
                        <img className='options-img' src={carsPNG} alt="alt" /> 
                    Cars</p>

                    </div>
                    <div className="content__options-filter">
                        <Filters />
                    </div>
                </div>
                <div className="content__inform">
                    <Test/>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;
