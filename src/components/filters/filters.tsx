import React, { useState } from "react";

// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../button";
import Input from "../input";

const Filters = () => {
    const [ inputValueName, setInputValueName ] = useState('');
    const [ inputValueSername, setInputValueSername ] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    // const [ inputValueActive, setInputValueActive ] = useState(true);
    // const [ inputValueInActive, setInputValueInActive ] = useState(true);
    
    let url = "https://edu.evgeniychvertkov.com/v1/driver/";

    fetch(url, {
    method: "GET",
    headers: {
        "Accept" : "application/json",
        "X-Authorization": "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json"
    },
    // body: JSON.stringify({
    //   first_name: "Vlad",
    //    last_name: "Koretskiy",
    //    date_birth: 1637147585649,
    //    status: {title: "Активный", code: "active"},
    // })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    
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



    return(
        <div>
            <div className='content__options-filter input'>
                <Input value={inputValueName} onChange={inp}/>
                <Input value={inputValueSername} onChange={(e) => setInputValueSername(e.target.value)}/>
            </div>
            <Button  onClick={dataConvert(1637147585649)}
                btnText='data'
            />
            <Button  onClick={toDay(1637147585649)}
                btnText='day'
            />
            <Button  onClick={toMounth(1637147585649)}
                btnText='mounth'
            />
            <Button  onClick={toYear(1637147585649)}
                btnText='year'
            />

            {/* <div className='content__options-filter date'>
                <select name="#" id="">
                    <option disabled>Choose year</option>
                    <option value=''>Years</option>
                </select>
                <select name="#" id="">
                    <option disabled>Choose mounth</option>
                    <option value=''>Mounth</option>
                </select>
                <select name="#" id="">
                    <option disabled>Choose day</option>
                    <option value=''>Days</option>
                    <option value=''></option>  
                </select>
            </div> */}

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