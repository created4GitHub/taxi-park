import React, { useEffect, useState } from "react";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { REMOVE } from '../../../requests';
import { Button } from "../../button";

import icons from '../../../img/IconsDirection.svg'
import './formSection.style.scss';

const FormSection = (props: any) => {
  let itemInfo = props.info;
  const [deletes, setDeletes] = useState(itemInfo.id);
  const [isOpen, setIsopen]: any = useState(false) 

  const del = (event: any) => {
    setDeletes(REMOVE('driver', deletes));
    event.target.parentNode.remove();
  }

  let infoEntries = Object.entries(props.info) as any;  

  return (
    <>
      <div className="table_section">
        {infoEntries.map((item: any, index: any) => {
          return <FormSectionTab key={index} {...{ ...props, item: item }} />;
        })}
        <Button 
          onClick = {() => setIsopen((prevState: any) => !prevState)}
          className = 'table_section-showButton'
          btnText = 'show'
        />
        <Button 
          onClick = {del}
          className = 'table_section-deleteButton'
          btnText = 'delete'
        />
      </div>
        { isOpen ? <div className='table_section_isActive'>
          <div className='table_section_isActive-cap block'>
            <p>id <img src={icons} alt="alt" /></p> 
            <p>model <img src={icons} alt="alt" /></p> 
            <p>mark <img src={icons} alt="alt" /></p>
            <p>number car <img src={icons} alt="alt" /></p>
            <p>year <img src={icons} alt="alt" /></p>
            <p>class <img src={icons} alt="alt" /></p>
          </div>
          <div className='table_section_isActive-cars block'>
            <p>23462664</p> 
            <p>Ford</p> 
            <p>Fusion</p>
            <p>AX6475HA</p>
            <p>2020</p>
            <p>Эко</p>
          </div>
          <div className='table_section_isActive-cars block'>
            <p>23462664</p> 
            <p>Ford</p> 
            <p>Fusion</p>
            <p>AX6475HA</p>
            <p>2020</p>
            <p>Эко</p>
          </div>
          <div className='table_section_isActive-cars block'>
            <p>23462664</p> 
            <p>Ford</p> 
            <p>Fusion</p>
            <p>AX6475HA</p>
            <p>2020</p>
            <p>Эко</p>
          </div>
        </div> : '' } 
    </>
  );
};

export default FormSection;
