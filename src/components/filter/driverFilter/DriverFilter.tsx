import React, { useContext }from 'react';

import Input from '../../input';

import { getContext } from '../../../context';


export default function DriverFilter( props : any ) {
    const [get, setGet] = useContext(getContext);


    const search = (event : any) => {
        props.info.filter((item : any) => {
            
        })
        console.log(event.target.value)
    }

    return (
        <>
        <div className="filter-element">
        < Input 
        onChange={search}
        name="id"
        placeholder="Search by ID"/>
        </div>
        <div className="filter-element">
        < Input 
        onChange={search}
        name="first_name"
        placeholder="Search by name"/>
            </div>
            <div className="filter-element">
            < Input 
            onChange={search}
            name="last_name"
            placeholder="Search by surname"/>
            </div>
        </>
    )
}

