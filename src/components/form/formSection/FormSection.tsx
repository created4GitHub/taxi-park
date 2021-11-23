import React, { useEffect, useState } from "react";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { REMOVE } from '../../../requests';
import { Button } from "../../button";

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
        { isOpen ? <div className='table_section_isActive'>gggdgsdfgeetgwerdgvsd</div> : '' } 
    </>
  );
};

export default FormSection;
