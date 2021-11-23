import React, { useState, useContext, useEffect } from "react";

import { Context } from "../../../context";

import Input from "../../input";
import { Button } from "../../button";
import { GET } from "../../../requests";
import { POST } from "../../../requests";

import addObj from '../../img/addObj.svg'
import deleteObj from '../../img/deleteObj.svg'

import './addForm.style.scss'

const AddForm = () => {
    const [statuses, setStatuses]: any = useState();
    const [context, setContext] = useContext(Context);
    const [addRequest, setAddRequest]: any = useState({
        model: '',
        mark: '',
        number: '', 
        year: null,
        driver_id: null,
        status: {
            title: '', 
            code: ''
        }
        
    })



    useEffect(() => {
        const getStatuses = GET('driver-status');
        getStatuses.then((resp: any) => {
            setStatuses(resp.data);
        });
    }, [])

    const renderCheckbox = () => {
        return statuses && statuses.map((item: any, index: any) => {
            return <option key={index} value={item.code} >{item.title}</option>
        })
    }

    const check = () => {
        let checkMass: any = [];

        const checkRequest = (mass: any) => {
            for (let item in mass) {
                if (typeof mass[item] === "object") {
                    checkRequest(mass[item]);
                } else {
                    checkMass.push(mass[item]);
                }
            }
        }

        checkRequest(addRequest);

        for(let index of checkMass){
            if(index === '' || !index){
                return
            }
        } 

        POST('driver', addRequest)
    }

    const chendeSelect = (event: any) => {
        addRequest.status.title = event.target.selectedOptions[0].innerText
        addRequest.status.code = event.target.value
    }

    return (
        <div className='table_section_add'>
 
        </div>
    )
}

export default AddForm
