import React, { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';

import useDebounce from '../debounce/index'

import './formDriver.min.scss'

const FormDrivers: any = () => {
    const [numberInput, setNumberInput]: any = useState(0);
    const [inputParam, setInputParam]: any = useState();
    const [formParam, setFormParam]: any = useState();

    const ref: any = useRef(null);

    // useEffect(() => { 
    //     document.addEventListener('mousedown', handleClickOutside); 
    //     return () => document.addEventListener('keydown', handleClickOutside); 
    // }); 


    const handleClickOutside = (event: any) => { 
        if(event.target.tagName !== "INPUT" || event.keyCode === 13){
            setNumberInput(0);
            setFormParam({[event.target.id]: inputParam});
            console.log(formParam);
        }
    }; 

    const foo = () => {
        if(formParam === true)
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleClickOutside); 
    }

    useDebounce(foo(), 1000)

    const toggleEditing = () => {
        setTimeout(()=> {
            ref.current.focus();
        }, 10);
    }
 
    return ( 
        <div className='table' id='1'>
            <div className='table_div'>id</div> 

            { numberInput === 'first_name' ? <input name='first_name' type="text" placeholder='text' className='table_input' ref={ref} onChange={(e) => setInputParam(e.target.value)}/> 
                : <div id='first_name' className='table_div' onClick={() => {setNumberInput('first_name'); toggleEditing()}}>first name</div> } 

            { numberInput === 2 ? <input name='last_name' type="text"  placeholder='text' className='table_input' ref={ref} onChange={(e) => setInputParam(e.target.value)}/> 
                : <div id='last_name' className='table_div' onClick={() => {setNumberInput(2); toggleEditing()}}>last name</div> } 

             <div className='table_div'>date birth</div>

            { numberInput === 3 ? <input name='title' type="text" placeholder='text' className='table_input' ref={ref} onChange={(e) => setInputParam(e.target.value)}/> 
                : <div id='first_name' className='table_div' onClick={() => {setNumberInput(3); toggleEditing()}}>title</div> } 

            { numberInput === 4 ? <input name='code' type="text" placeholder='text' className='table_input' ref={ref} onChange={(e) => setInputParam(e.target.value)}/> 
                : <div id='first_name' className='table_div' onClick={() => {setNumberInput(4); toggleEditing()}}>code</div> }  

         </div>
    ); 
}

export default FormDrivers
