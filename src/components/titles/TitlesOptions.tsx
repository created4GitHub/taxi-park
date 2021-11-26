import React, { useState, Dispatch, SetStateAction, useContext } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import { Context } from '../../context';

import { Button } from "../regularComponents/button/Button";
import Filter from '../filters/Filters';

import drivers from '../../img/drivers.svg';
import cars from '../../img/cars.svg';

const OptionTitles = () => {
    const [activeButton, setActiveButton]: [string, Dispatch<SetStateAction<string>>] = useState('');
    const [context, setContext]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(Context);

    return (
        <div className="content__options">
            <div className="content__options-paragraph">
                <div className='elem'>
                    <Link to="/drivers">
                        <Button
                            className={activeButton !== 'Drivers' ? "but up" : "but up active"}
                            onClick={() => { setActiveButton('Drivers'); setContext(false) }}
                            btnText={
                                <p className='options-paragraph'>
                                    <img
                                        className='options-img'
                                        src={drivers}
                                        alt="alt" 
                                />Drivers</p>}
                        />
                        <Button
                            onClick={() => { setActiveButton('Drivers'); setContext(true) }}
                            className='add driver'
                            btnText='+'
                        />
                    </Link>
                </div>
                <div className='elem'>
                    <Link to="/cars">
                        <Button
                            className={activeButton !== 'Cars' ? "but" : "but active"}
                            onClick={() => { setActiveButton('Cars'); setContext(false) }}
                            btnText={
                                <p className='options-paragraph'>
                                    <img className='options-img'
                                        src={cars}
                                        alt="alt" 
                                />Cars</p>}
                        />
                        <Button
                            onClick={() => { setActiveButton('Cars'); setContext(true) }}
                            className='add car'
                            btnText='+'
                        />
                    </Link>
                </div>
            </div>
            <Routes>
                < Route path="/drivers" element={< Filter {...{ title: "driver" }} />} />
                < Route path="/cars" element={< Filter {...{ title: "car" }} />} />
            </Routes>
        </div>
    )
}

export default OptionTitles;
