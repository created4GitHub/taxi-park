import React, { useState, useEffect, useContext } from 'react';

import DriverFilter from './driverFilter/DriverFilter';
import CarFilter from './carFilter/CarFilter';

import { GET } from '../../requests';
import { infoContext } from './context';

import './filters.style.scss' 

const Filter = (props : any) => {
    
    // const [ inputValueName, setInputValueName ] = useState('');
    // const [ inputValueSername, setInputValueSername ] = useState('');

    useEffect(() => {
        const info = GET(props.title);
    }, [])
            return (
                <div className="content__options-filter">
                {props.title === "driver" ? <DriverFilter /> : <CarFilter />}
                </div>
    )
}

export default Filter;
