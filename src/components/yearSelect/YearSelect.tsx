import React, { useState } from 'react';

import { Button } from '../button';

import './year.style.scss'

const YearSelect = (props: any) => {
    const [moldOpening, setMoldOpening]: any = useState();
    const [buttonTextYear, setButtonTextYear]: any = useState('Год');
    const [result, setResult]: any = useState();

    const renderYears = () => {
        let massYears = [];

        for(let i: number = 2021; i >= 1960; i--){
            massYears.push(i)
        }

        return massYears.map((item: number, index: number) => {
            return(
                <Button 
                    id={item}
                    key={index} 
                    className='data_year-block_button' 
                    btnText={item}
                />
            )
        })
    }

    const onBlur = (event: any) => {
        setMoldOpening(false);
        if(event.relatedTarget !== null && event.relatedTarget.id){
            setButtonTextYear(event.relatedTarget.id);
            setResult(event.relatedTarget.id);
        }
    }

    return (
        <div className='search__data_year'>
            <Button 
            className='data_year-button' 
            btnText={buttonTextYear} 
            onClick={() => setMoldOpening((prevState: any) => !prevState)} 
            onBlur={onBlur}/>
            { moldOpening ? <div 
            className='data_year-block'> 
                {renderYears()}
            </div> : ''} 
        </div>

    )
}

export default YearSelect;
