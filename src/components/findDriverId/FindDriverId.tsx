import React, { useEffect, useState, ChangeEventHandler, Dispatch, SetStateAction } from 'react'

import { GET } from '../../requests'
import { Button } from '../regularComponents/button/Button'
 
import './findDriverId.style.scss'
type InfoType = {
    id: number;
    first_name: string;
    driver_id: number;
    last_name: string;
    date_birth: number;
    date_created: number;
    mark: string;
    model: string;
    number: string | number;
    year: number;
    title: string;
};

type Props = {
    maxLength?: number;
    name?: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
};

const FindDriverId: React.FC<Props> = (props: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [users, setUsers]: [never[], Dispatch<SetStateAction<never[]>>] = useState([])
    const [result, setResult]: [string, Dispatch<SetStateAction<string>>] = useState('')
    const [nameBut, setNameBut]: [string, Dispatch<SetStateAction<string>>] = useState('user')

    useEffect(() => {
        GET('driver').then((data: any) => {
            setUsers(data.data)
        })
    }, [])

    const renderDrivers = () => {
        return users.map((item: InfoType, index: number) => {
            return <Button 
                id={item.id}
                className='search__findDriber-button'
                key={index} 
                btnText={<>
                    <p>{item.first_name}</p>
                    <p>{item.last_name}</p>
                </>} 
            />
        })
    }

    const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>): void => {        
        if(event.relatedTarget !== null && event.relatedTarget.id){
            setNameBut(event.relatedTarget.id);
            setResult(event.relatedTarget.id)
        }

        setIsActive((prevState: boolean) => !prevState);
    }
    props.onChange(result as never) 
    

    return(
        <div className='search__findDriber'>
            <Button 
                className='data_year-button' 
                onClick={() => setIsActive((prevState: boolean) => !prevState)}
                onBlur={onBlurEvent}
                btnText = {'id driver - ' + nameBut}
            />
            { isActive ? <div className='search__findDriber_cartsDriver'>
                {renderDrivers()}
            </div> : '' }
        </div>
    )
}

export default FindDriverId;
