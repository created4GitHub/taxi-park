import { useContext, useState, Dispatch, SetStateAction } from "react";
import { deletedContext } from "../../../context";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { GET, REMOVE, GETCAR } from '../../../requests';
import { Button } from "../../regularComponents/button/Button";

import icons from "../../../img/IconsDirection.svg";

import "./formSection.style.scss";

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
  status: Status;
};

type Status = {
  title: string;
  code?: string;

};

type PropsStatus = {
  info: InfoType;
  title: string;
  statuses: Status[];
};

const FormSection = (props: PropsStatus) => {
  let itemInfo: InfoType = props.info;
  const [isOpen, setIsopen] = useState<boolean>();
  const [cars, setCars]: [undefined[] | undefined, Dispatch<SetStateAction<undefined[] | undefined>>] = useState();
  const [driver, setDriver]: [InfoType | undefined, Dispatch<SetStateAction<InfoType | undefined>>] = useState();
  const [isDeleted, setIsDeleted]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(deletedContext);
  let infoEntries: [string, unknown][] = Object.entries(props.info);

  const deleteEl = () => {
    REMOVE(props.title, itemInfo.id).then(() => {
      setIsDeleted((isDeleted: SetStateAction<boolean>) => !isDeleted);
    });
  };

  const search = () => {
    if (props.title === 'driver') {
      GETCAR(String(props.info.id))
        .then(resp => resp.json())
        .then(data => setCars(data.data));
    }
    if (props.title === 'car') {
      GET(`driver/${props.info.driver_id}`)
        .then(resp => setDriver(resp.data));
    }
  }

  const renderCar = () => {
    if (cars) {
      return cars.map((item: InfoType | undefined, index: number) => {
        return (
          <div key={index} className='table_section_isActive-cars block'>
            <p>{item!.id}</p>
            <p>{item!.driver_id}</p>
            <p>{item!.mark}</p>
            <p>{item!.model}</p>
            <p>{item!.number}</p>
            <p>{item!.year}</p>
            <p>{item!.status.title}</p>
          </div>
        )
      })
    }
  }

  const renderDriver = () => {
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

  return (
    <>
      <div className="table_section">
        {infoEntries.map((item: [string, unknown], index: number) => {
          return <FormSectionTab key={index} {...{ ...props, item: item }} />;
        })}
        <Button
          onClick={() => {
            setIsopen((prevState) => !prevState);
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
        {props.title === 'driver' ? renderCar() : ''}
        {props.title === 'car' ? renderDriver() : ''}
      </div> : ''}
    </>
  );
};

export default FormSection;
