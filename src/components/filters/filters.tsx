import React, { useState, SetStateAction, Dispatch, useContext } from 'react';
import { Context } from '../../context';

import { Button } from "../button";
import Input from "../input";
import DayForm from '../formData/dataDay/day';
import MontForm from '../formData/dataMont/mont';
import YearForm from '../formData/dataYear/year';

import drivers from '../../img/drivers.svg';
import cars from '../../img/cars.svg';

import './filters.style.scss'

const Filters = () => {
    const [ inputValueName, setInputValueName ] = useState('');
    const [ inputValueSername, setInputValueSername ] = useState('');
    const [ activeButton, setActiveButton ]: [string, Dispatch<SetStateAction<string>>] = useState('');
    const [context, setContext]: any = useContext(Context);

    const renderCheckbox = () => {
        let mass: string[] = []

        const TEST = ['active', 'no Active', 'что-то еще', 'и еще']

        TEST.forEach((element: any) => {
            mass.push(element)
        });

        mass = [...new Set(mass) as any];

        return mass.map((item: string, index: number) => {
            return (
                <label key={index} >
                    <input
                        type="radio"
                        className="content__options-radio"
                        value={item}
                        onClick={() => {
                          console.log('запрос на сервак')
                        }}
                    />
                {item}</label>
            )
        })
    }

    return (
        <div className="content__options">
            <div className="content__options-paragraph">
                <div className='elem'>
                    <Button
                        className={activeButton !== 'Drivers' ? "but up" : "but up active"}
                        onClick={() => { setActiveButton('Drivers') }}
                        btnText={<p className='options-paragraph'><img className='options-img' src={drivers} alt="alt" />
                            Drivers </p>}
                    />
                    <Button
                        onClick ={() => {setContext(true)}}
                        className='add driver'
                        btnText='+'
                    />
                </div>
                <div className='elem'>
                    <Button
                        className={activeButton !== 'Cars' ? "but" : "but active"}
                        onClick={() => { setActiveButton('Cars') }}
                        btnText={<p className='options-paragraph'><img className='options-img' src={cars} alt="alt" />
                            Cars</p>}
                    />
                    <Button
                        className='add car'
                        btnText='+'
                    />
                </div>
            </div>
            <div className="content__options-filter">
                <div className='content__options-filter date'>
                    <div className='content__options-search'>
                        <Input className='content__options-input' placeholder='Поиск по ФИО' value={inputValueName} onChange={(event) => setInputValueName(event.target.value)} />
                        <Input className='content__options-input' placeholder='Поиск по ID' value={inputValueSername} onChange={(event) => setInputValueSername(event.target.value)} />
                    </div>
                    <div className="content__options_formData">
                        <DayForm />
                        <MontForm />
                        <YearForm />
                    </div>
                    <form className="content__options-form">
                        {renderCheckbox()}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Filters;
