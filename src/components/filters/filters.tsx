import React, { useState, SetStateAction, Dispatch } from 'react';

import { Button } from "../button";
import Input from "../input";
import massObj from "../testComponents/testMass";
import FormDrivers from "../form/formDriver";

import driversPNG from '../../img/drivers.png';
import carsPNG from '../../img/cars.png';

import './filters.style.scss'

const Filters = () => {
    const [ inputValueName, setInputValueName ] = useState('');
    const [ inputValueSername, setInputValueSername ] = useState('');
    // const [startDate, setStartDate] = useState(new Date());
    const [activeButton, setActiveButton]: [string, Dispatch<SetStateAction<string>>] = useState('');


    // const [ inputValueActive, setInputValueActive ] = useState(true);
    // const [ inputValueInActive, setInputValueInActive ] = useState(true);
    
    const inp = (e: any) => {
        setInputValueName(e.target.value);
    }

    function dataConvert(milliseconds: number): any {

        let date = new Date(milliseconds);
        let year = date.getFullYear()
        let mounth: number | string = date.getMonth() + 1;
        let day: number | string = date.getDate();
        mounth = (mounth < 10) ? '0' + mounth : mounth;
        day = (day < 10) ? '0' + day : day;
        
        return console.log([day, mounth, year].join('.'));
    }

    function toDay(milliseconds: number): any {

        let date = new Date(milliseconds);
        let day: number | string = date.getDate();

        return console.log(day);
    }
    
    function toMounth(milliseconds: number): any {

        let date = new Date(milliseconds);
        let mounth: number | string = date.getMonth() + 1;

        return console.log(mounth);
    }
 
    function toYear(milliseconds: number): any {

        let date = new Date(milliseconds);
        let year = date.getFullYear();

        return console.log(year);
    }



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

    return (
        <div className="content__options">
            <div className="content__options-paragraph">

                <div className='elem'>
                    <Button
                        className={activeButton !== 'Drivers' ? "but up" : "but up active"}
                        onClick={() => { setActiveButton('Drivers') }}
                        btnText={<p className='options-paragraph'><img className='options-img' src={driversPNG} alt="alt" />
                            Drivers </p>}
                    />
                    <Button
                        className='add driver'
                        btnText='+'
                    />
                </div>
                <div className='elem'>
                    <Button
                        className={activeButton !== 'Cars' ? "but" : "but active"}
                        onClick={() => { setActiveButton('Cars') }}
                        btnText={<p className='options-paragraph'><img className='options-img' src={carsPNG} alt="alt" />
                            Cars</p>}
                    />
                    <Button
                        className='add car'
                        btnText='+'
                    />
                </div>
            </div>
            <div className="content__options-filter">
                <div className='content__options-filter input'>
                    <Input value={inputValueName} onChange={inp} />
                    <Input value={inputValueSername} onChange={(e) => setInputValueSername(e.target.value)} />
                </div>
                <Button onClick={dataConvert(1637147585649)}
                    btnText='data'
                />
                <Button onClick={toDay(1637147585649)}
                    btnText='day'
                />
                <Button onClick={toMounth(1637147585649)}
                    btnText='mounth'
                />
                <Button onClick={toYear(1637147585649)}
                    btnText='year'
                />
                <div className='content__options-filter date'>
                    <div className='content__options-search'>
                        <Input className='content__options-input' placeholder='Поиск по ФИО' value={inputValueName} onChange={(event) => setInputValueName(event.target.value)} />
                        <Input className='content__options-input' placeholder='Поиск по ID' value={inputValueSername} onChange={(event) => setInputValueSername(event.target.value)} />
                    </div>
                    <form className="content__options-form">
                        {renderCheckbox()}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Filters