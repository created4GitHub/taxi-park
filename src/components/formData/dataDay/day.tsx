import React, { useState } from 'react';

import { Button } from '../../button';

import './day.style.scss';

const DayForm = () => {
    const [moldOpening, setMoldOpening]: any = useState();
    const [buttonTextDay, setButtonTextDay]: any = useState('День');

    const renderDeys = () => {
        let nums = [];

        for(let i = 1; i <= 31; i++){
            nums.push(i);
        }

        return nums.map((item: number, index: number) => {
            return(
                <Button 
                    id={item}
                    key={index} 
                    className='data_day-block_button' 
                    btnText={item}
                />
            );
        });
    }

    const onBlur = (event: any) => {
        setMoldOpening(false);

        if(event.relatedTarget !== null && event.relatedTarget.id){
            setButtonTextDay(event.relatedTarget.id);
        }
    }

    return(
        <div className='search__data_day'>
            <Button className='data_day-button' btnText={buttonTextDay} onClick={() => setMoldOpening((prevState: any) => !prevState)} onBlur={onBlur}/>
            {moldOpening ? <div className='data_day-block'>{renderDeys()}</div> : ''}
        </div>
    );
}

export default DayForm;