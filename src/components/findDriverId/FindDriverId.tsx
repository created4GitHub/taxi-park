import React, { useEffect, useState, ChangeEventHandler } from 'react'

import { GET } from '../../requests'
import { Button } from '../regularComponents/button/Button'
 
import './findDriverId.style.scss'

type Props = {
    maxLength?: number;
    name?: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
};

const FindDriverId: React.FC<Props> = (props) => {
    const [isActive, setIsActive]: any = useState(false)
    const [users, setUsers]: any = useState([])
    const [result, setResult]: any = useState()
    const [nameBut, setNameBut]: any = useState('user')

    useEffect(() => {
        GET('driver').then((data: any) => {
            setUsers(data.data)
        })
    }, [])

    const renderDrivers = () => {
        return users.map((item: any, index: number) => {
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

    const onBlurEvent = (event: any) => {        
        if(event.relatedTarget !== null && event.relatedTarget.id){
            setNameBut(event.relatedTarget.id);
            setResult(event.relatedTarget.id)
        }

        setIsActive((prevState: boolean) => !prevState);
    }

    props.onChange(result)

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

export default FindDriverId
