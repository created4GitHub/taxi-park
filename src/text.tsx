import React, { useState } from 'react'

import FormDrivers from './components/form/formDriver';

import massObj from './testMass'

const Test = () => {
    const [eve, setEve]: any = useState(true)

    const renderForm = () => {
        return massObj.map((item: any, index: any) => {
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
        })
    }

    return(
        <div>
            {eve ? renderForm() : ''}
            <button onClick={() => setEve(true)}>true</button>
            <button onClick={() => setEve(false)}>false</button>
        </div>
    )
}

export default Test
