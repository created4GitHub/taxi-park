import React, { useState } from "react";

import Input from "../input";
import massObj from "../testComponents/testMass";
import FormDrivers from "../form/formDriver";

import './filters.style.scss'

const Filters = () => {
    const [ inputValueName, setInputValueName ] = useState('');
    const [ inputValueSername, setInputValueSername ] = useState('');

    const renderCheckbox = () => {
        let mass: string[] = []

        massObj.forEach((element: any) => {
            mass.push(element.status.code)
        });

        mass = [...new Set(mass) as any];

        return mass.map((item: string, index: number) => {
            return (
                <label key={index} >
                    <input 
                        type="radio" 
                        className="content__options-radio" 
                        value={item} 
                        name="fooby[2][]" 
                        onClick={() => {
                            renderCards(item)
                        }}
                    />
                {item}</label>
            )
        })
    }

    const renderCards = (param: any) => {
        return massObj.map((item: any, index: number) => {
            if(item.status.code === param){
                console.log(item)
                return(
                    <FormDrivers 
                        key={index}
                        id={item.id} 
                        index={index}
                        code={item.status.code}
                        title={item.status.title}
                        last_name={item.last_name} 
                        date_birth={item.date_birth}
                        first_name={item.first_name} 
                    />
                )
            }
        })
    }

    return(
        <div>
            <div className='content__options-filter input'>
                <div className='content__options-search'>
                    <Input className='content__options-input' placeholder='Поиск по ФИО' value={inputValueName} onChange={(event) => setInputValueName(event.target.value)}/>
                    <Input className='content__options-input' placeholder='Поиск по ID' value={inputValueSername} onChange={(event) => setInputValueSername(event.target.value)}/>
                </div>
                <form className="content__options-form">
                    {renderCheckbox()}
                </form>
            </div>
        </div>
    )
}

export default Filters