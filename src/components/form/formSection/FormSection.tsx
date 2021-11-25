import React, { useContext, useEffect, useState } from "react";

import { deletedContext } from "../../../context";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { GET, REMOVE, GETCAR } from '../../../requests';
import { Button } from "../../button";

import icons from "../../../img/IconsDirection.svg";
import "./formSection.style.scss";

const FormSection = (props: any) => {
  let itemInfo = props.info;
  const [isOpen, setIsopen]: any = useState(false) 
  const [cars, setCars]: any = useState() 
  const [driver, setDriver]: any = useState() 
  const [isDeleted, setIsDeleted] = useContext(deletedContext);
  let infoEntries = Object.entries(props.info) as any;  
  
  const deleteElement = () => {
    REMOVE(props.title, itemInfo.id).then((data: any) => {
      setIsDeleted((isDeleted: any) => !isDeleted);
    });
  };

  const search = () => {
    if(props.title === 'driver'){
      GETCAR(props.info.id)
        .then(resp => resp.json())
        .then(data => setCars(data.data))
    }
    if(props.title === 'car' && props.info.driver_id){
      GET(`driver/${props.info.driver_id}`)
        .then(resp => setDriver(resp.data))
    }
  }

  const renderCar = () => {
    if(cars){
      return cars.map((item: any, index: number) => {
         return (
            <div key={index} className='table_section_isActive-cars block'>
              <p>{item.id}</p> 
              <p>{item.mark}</p> 
              <p>{item.model}</p>
              <p>{item.number}</p>
              <p>{item.year}</p>
              <p>{item.status.title}</p>
            </div>
         )
      })
    }
  }

  const renderDriver = () => {
    if(driver){
      return (
        <div className='table_section_isActive-cars block'>
          <p>{driver.id}</p>
          <p>{driver.last_name}</p>
          <p>{driver.first_name}</p>
          <p>{new Date(driver.date_birth).toLocaleDateString()}</p>
          <p>{new Date(driver.date_created).toLocaleDateString()}</p>
          <p>{driver.status.title}</p>
        </div>
      )
    }
  }

  return (
    <>
      <div className="table_section">
        {infoEntries.map((item: any, index: number) => {
          return <FormSectionTab key={index} {...{ ...props, item: item }} />;
        })}
        <Button 
          onClick = {() => {
            setIsopen((prevState: boolean) => !prevState)
            search()
          }}
          className = 'table_section-showButton'
          btnText = 'show'
        />
        <Button
          onClick={deleteElement}
          className="table_section-deleteButton"
          btnText="delete"
        />
      </div>
        { isOpen ? <div className='table_section_isActive'>
          {/* <div className='table_section_isActive-style'> */}
            <div className='table_section_isActive-cap block'>
              {props.title === 'driver' ? 
                <>
                  <p>id <img src={icons} alt="alt" /></p> 
                  <p>model <img src={icons} alt="alt" /></p> 
                  <p>mark <img src={icons} alt="alt" /></p>
                  <p>number <img src={icons} alt="alt" /></p>
                  <p>year <img src={icons} alt="alt" /></p>
                  <p>class <img src={icons} alt="alt" /></p>
                </> : ''}
              {props.title === 'car' ? 
                <>
                  <p>id <img src={icons} alt="alt" /></p> 
                  <p>name <img src={icons} alt="alt" /></p> 
                  <p>sername <img src={icons} alt="alt" /></p>
                  <p>bithday <img src={icons} alt="alt" /></p>
                  <p>registration<img src={icons} alt="alt" /></p>
                  <p>status <img src={icons} alt="alt" /></p>
                </>: ''}
            </div>
            {props.title === 'driver' ? renderCar() : ''}
            {props.title === 'car' ? renderDriver() : ''}
          {/* </div> */}
        </div> : '' } 
    </>
  );
};

export default FormSection;
