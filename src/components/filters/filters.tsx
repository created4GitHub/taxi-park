import React, { useState } from "react";
import Input from "../input";

const Filters = () => {
    const [ inputValueName, setInputValueName ] = useState('');
    const [ inputValueSername, setInputValueSername ] = useState('');
    // const [ inputValueActive, setInputValueActive ] = useState(true);
    // const [ inputValueInActive, setInputValueInActive ] = useState(true);

    console.log(inputValueName);
    
    const inp = (e: any) => {
        setInputValueName(e.target.value);
    }


    return(
        <div>
            <div className='content__options-filter input'>
                <Input value={inputValueName} onChange={inp}/>
                <Input value={inputValueSername} onChange={(e) => setInputValueSername(e.target.value)}/>
            </div>
            {/* <div className='content__options-filter date'>
                <Input type='date' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <Input type='date' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <div className='content__options-filter checkbox'>
                <Input type='checkbox' value={inputValueActive} onChange={(e) => setInputValueActive(e.target.value)}/>
                <Input type='checkbox' value={inputValueInActive} onChange={(e) => setInputValueInActive(e.target.value)}/>
                <Input type='checkbox' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <Input type='checkbox' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div> */}
        </div>
    )
}

export default Filters