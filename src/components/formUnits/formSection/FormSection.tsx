import { useContext, useState } from "react";

import { deletedContext } from "../../../context";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { GET, REMOVE, GETCAR } from '../../../requests';
import { Button } from "../../regularComponents/button/Button";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";

import icons from "../../../img/IconsDirection.svg";

import "./formSection.style.scss";

export const renderDrivers = (driver : any) => {
  if (driver) {
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

const FormSection = (props: any) => {
  const itemInfo = props.info;
  const [isOpen, setIsopen]: any = useState(false);
  // const [cars, setCars]: any = useState();
  const [additionalInfo, setAdditionalInfo]: any = useState();
  const [isDeleted, setIsDeleted] = useContext(deletedContext);
  let infoEntries = Object.entries(props.info) as any;

  const deleteEl = (event: any) => {
    REMOVE(props.title, itemInfo.id).then((data: any) => {
      setIsDeleted((isDeleted: any) => !isDeleted);
    });
  };

  const search = () => {
    if (props.title === 'driver') {
      GETCAR(props.info.id)
        .then(resp => resp.json())
        .then(data => setCars(data.data));
    }
    if (props.title === 'car') {
      GET(`driver/${props.info.driver_id}`)
        .then(resp => setDrivers(resp.data));
    }
  }

  return (
    <>
      <div className="table_section">
        {infoEntries.map((item: any, index: any) => {
          return <FormSectionTab key={index} {...{ ...props, item: item }} />;
        })}
        <Button
          onClick={() => {
            setIsopen((prevState: any) => !prevState);
            search();
          }}
          className='table_section-showButton'
          btnText={isOpen ? 'hide' : 'show'}
        />
        <Button
          onClick={deleteEl}
          className="table_section-deleteButton"
          btnText="delete"
        />
      </div>
      {isOpen ? <div className='table_section_isActive'>
        <div className='table_section_isActive-cap block'>
          {props.title === 'driver' ?
            <>
              <p>ID <img src={icons} alt="alt" /></p>
              <p>Driver ID <img src={icons} alt="alt" /></p>
              <p>Model <img src={icons} alt="alt" /></p>
              <p>Mark <img src={icons} alt="alt" /></p>
              <p>Number <img src={icons} alt="alt" /></p>
              <p>Year <img src={icons} alt="alt" /></p>
              <p>Class <img src={icons} alt="alt" /></p>
            </> : ''}
          {props.title === 'car' ?
            <>
              <p>ID <img src={icons} alt="alt" /></p>
              <p>Name <img src={icons} alt="alt" /></p>
              <p>Surname <img src={icons} alt="alt" /></p>
              <p>Birthday <img src={icons} alt="alt" /></p>
              <p>Registration<img src={icons} alt="alt" /></p>
              <p>Status <img src={icons} alt="alt" /></p>
            </> : ''}
        </div>
        {AdditionalInfo(additionalInfo)}
      </div> : ''}
    </>
  );
};

export default FormSection;
