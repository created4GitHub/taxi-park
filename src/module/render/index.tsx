import React, { useState } from 'react'

import FormDrivers from '../../components/form/formDriver';
import massObj from '../../components/testComponents/testMass';

import './index.style.scss'

const RenderCards = () => {
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
        <div className='render_cards'>
            {<FormDrivers 
                    id='id' 
                    code='code'
                    title='title'
                    last_name='Last name'
                    date_birth='Date birth'
                    first_name='First name'
                />}
            {renderForm()}
        </div>
    )
}

export default RenderCards
