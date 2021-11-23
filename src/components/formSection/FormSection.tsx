import React, { useEffect, useState } from "react";

import FormSectionTab from "../formSectionTab/FormSectionTab";
import { REMOVE } from '../../requests/requests';
import { Button } from "../button";

import './formSection.style.scss';


const FormSection = (props: any) => {
  let itemInfo = props.info;
  const [deletes, setDeletes] = useState(itemInfo.id);
  // console.log(itemInfo);
  
  const del = () => {
    setDeletes(REMOVE('driver', deletes))
  }

  let infoEntries = Object.entries(props.info) as any;  

  return (
    <div className="table_section">
      {infoEntries.map((item: any, index: any) => {
        return <FormSectionTab key={index} {...{ ...props, item: item }} />;
      })}
      <Button 
        onClick = {console.log(itemInfo)}
        className = 'table_section-showButton'
        btnText = 'show'
      />
      <Button 
        onClick = {del}
        className = 'table_section-deleteButton'
        btnText = 'delete'
      />
    </div>
  );
};

export default FormSection;
