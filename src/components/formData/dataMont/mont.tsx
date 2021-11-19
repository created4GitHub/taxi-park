import React, { useState } from 'react';

import { Button } from '../../button';
import monthsRu from './massMont'
import { Mont } from './massMont'

import './mont.style.scss'

const MontForm = () => {
    const [moldOpening, setMoldOpening]: any = useState();
    const [buttonTextMont, setButtonTextNomt]: any = useState();

    const renderMonts = () => {
        return monthsRu.map((item: Mont, index: number) => {
            return(
                <Button 
                    id={item.mont}
                    name={item.numberMont}
                    key={index} 
                    className='data_mont-button' 
                    btnText={item.mont}
                />
            )
        })
    }


    const onBlur = (event: any) => {
        setMoldOpening(false);
        if(event.relatedTarget !== null && event.relatedTarget.id){
            // console.log(event.relatedTarget.name)
            setButtonTextNomt(event.relatedTarget.id);
        }
    }

    return(
        <div className='search__data_mont'>
            <Button className='data_mont-button' btnText={buttonTextMont} onClick={() => setMoldOpening((prevState: any) => !prevState)} onBlur={onBlur}/>
            { moldOpening ? <div className='data_mont-block'>
                {renderMonts()}
            </div> : ''} 
        </div>

    )
}

export default MontForm
