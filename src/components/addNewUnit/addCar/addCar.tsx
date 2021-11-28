import { useState, useContext, useEffect, Dispatch, SetStateAction } from "react";
import { Context } from "../../../context";

import FindDriverId from "../../findDriverId/FindDriverId";
import YearSelect from "../../yearSelect/YearSelect";
import Input from "../../regularComponents/input/Input";
import { Button } from "../../regularComponents/button/Button";
import { GET, POST } from "../../../requests";

import addObj from '../../../img/addObj.svg'
import deleteObj from '../../../img/deleteObj.svg'

import './addCar.style.scss'

interface Request {
    model: string,
    mark: string,
    number: string,
    driver_id: number | null,
    year: number | null,
    status: {
        title: string,
        code: string,
    }
}

type titles = {
    title: string, 
    code: string;
}

const AddForm = () => {
    const [statuses, setStatuses] = useState<titles[]>();
    const [context, setContext]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(Context);
    const [addRequest, setAddRequest] = useState<Request>({
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
        const getStatuses = GET('car-status');
        getStatuses.then(resp => {
            setStatuses(resp.data);
        });
    }, [])

    const renderCheckbox = () => {
        return statuses && statuses.map((item: titles, index: number) => {
            return <option key={index} value={item.code} >{item.title}</option>
        })
    }

    const check = () => {
        let checkMass: Array<string | number> = [];

        const checkRequest = (mass: any) => {
            for (let item in mass) {
                if (typeof mass[item] === "object") {
                    checkRequest(mass[item]);
                } else {
                    checkMass.push(mass[item]);
                }
            }
        }

        if (addRequest.status.title === "") {
            addRequest.status = {
                title: "Эконом",
                code: "econom"
            }
        }

        checkRequest(addRequest);

        for (let index of checkMass) {
            if (index === '' || !index) {
                return
            }
        }
        setContext(false)

        POST('car', addRequest);
        addRequest.model = ''
        addRequest.mark = ''
        addRequest.number = ''
        addRequest.year = null
        addRequest.driver_id = null
        addRequest.status.title = ''
        addRequest.status.code = ''
    }

    const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        addRequest.status.title = event.target.selectedOptions[0].innerText
        addRequest.status.code = event.target.value
    }

    return (
        <div
            className='table_section_add'>
            <div
                className='table_section-block-input'>
                <Input
                    className='table_section-input'
                    onChange={(event) => addRequest.mark = event.target.value}
                    placeholder='Brand'
                />
            </div>
            <div
                className='table_section-block-input'>
                <Input
                    className='table_section-input'
                    onChange={(event) => addRequest.model = event.target.value}
                    placeholder='Modal'
                />
            </div>
            <div
                className='table_section-block-input'>
                <Input
                    className='table_section-input'
                    maxLength={8}
                    onChange={(event) => addRequest.number = event.target.value}
                    placeholder='Number car'
                />
            </div>
            <div
                className='table_section-block-input'>
                <YearSelect onChange={(event: any) => addRequest.year = event.target.value} />
            </div>
            <div
                className='table_section-block-input'>
                <FindDriverId
                    onChange={(event: any) => addRequest.driver_id = event} />
            </div>
            <select
                className='table_section_add-select'
                onChange={changeSelect}
            >
                {renderCheckbox()}
            </select>
            <div
                className='table_section_buttons' >
                <Button
                    className='table_section-button'
                    onClick={() => check()}
                    btnText={<img src={addObj} alt="alt" />} />
                <Button
                    className='table_section-button'
                    onClick={() => setContext(false)}
                    btnText={<img src={deleteObj} alt="alt" />} />
            </div>
        </div>
    )
}

export default AddForm;
