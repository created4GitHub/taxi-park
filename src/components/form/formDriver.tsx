import React, { useState, useEffect, Dispatch, SetStateAction, useRef, MutableRefObject } from 'react';

import massObj from '../testComponents/testMass'

import './formDriver.min.scss'

const FormDrivers: any = (props: any) => {
    const [numberInput, setNumberInput]: [string, Dispatch<SetStateAction<string>>] = useState('');
    const [inputParam, setInputParam]: [string, Dispatch<SetStateAction<string>>] = useState('');
    const [nameRequest, setNameRequest]: [string, Dispatch<SetStateAction<string>>] = useState('');

    const index = props.index;
    const ref: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const element = event.target as HTMLElement
            setNameRequest(element.id)

            if ((ref.current && !ref.current.contains(event.target))) {
                setNumberInput('')

                if(inputParam !== ''){
                    chengeMass()
                    setInputParam('')
                }
            } 
        }

        document.addEventListener("mousedown", handleClickOutside);
        // document.addEventListener('keydown', handleClickOutside); 
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            // document.addEventListener('keydown', handleClickOutside); 
        };
    });

    const chengeMass = () => {
        console.log(massObj[index][nameRequest])
        console.log(massObj[index])
        console.log([nameRequest])

        massObj[index][nameRequest] = inputParam
    }

    const toggleEditing = () => {
        setTimeout(()=> {
            ref.current.focus();
        }, 10);
    }

    const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputParam(event.target.value)
    }

    const handleClick = (param: string) => {
        setNumberInput(param); 
        toggleEditing();
    }
 
    return ( 
        <div className='table'>
            <div className='table_div'>
                <div className='table_paragraph'>{props.id}</div> 
            </div> 

            <div className='table_div'>
                { numberInput === 'first_name' ? <input name='first_name' type="text" placeholder={props.first_name} className='table_input' ref={ref} value={inputParam} onChange={handleChenge}/> 
                    : <p id='first_name' className='table_paragraph' onClick={() => handleClick('first_name')}>{props.first_name}</p> } 
            </div> 
            
            <div className='table_div'>
                { numberInput === 'last_name' ? <input name='last_name' type="text"  placeholder={props.last_name} className='table_input' ref={ref} value={inputParam} onChange={handleChenge}/> 
                    : <p id='last_name' className='table_paragraph' onClick={() => handleClick('last_name')}>{props.last_name}</p> } 
            </div>

            <div className='table_div'>
                <p className='table_paragraph'>{props.date_birth}</p>
            </div>

            <div className='table_div'>
                { numberInput === 'title' ? <input name='title' type="text" placeholder={props.title} className='table_input' ref={ref} value={inputParam} onChange={handleChenge}/> 
                    : <p id='status.title' className='table_paragraph' onClick={() => handleClick('title')}>{props.title}</p> } 
            </div>

            <div className='table_div'>
                { numberInput === 'code' ? <input name='code' type="text" placeholder={props.code} className='table_input' ref={ref} value={inputParam} onChange={handleChenge}/> 
                    : <p id='status.code' className='table_paragraph' onClick={() => handleClick('code')}>{props.code}</p> }  
            </div>

         </div>
    ); 
}

export default FormDrivers
