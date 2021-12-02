import {
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction
} from "react";
import { Context } from "../../../context";

import FindDriverId from "../../findDriverId/FindDriverId";
import YearSelect from "../../yearSelect/YearSelect";
import Input from "../../regularComponents/input/Input";
import { Button } from "../../regularComponents/button/Button";

import { POST, GETSTATUS } from "../../../requests";

import { Info, Status } from "../../../interfaces";

import addObj from "../../../img/addObj.svg";
import deleteObj from "../../../img/deleteObj.svg";

import "./addCar.style.scss";

const AddForm = () => {
  const [statuses, setStatuses] = useState(Array<Status>());
  const [addNew, setAddNew]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(Context);
  const [addRequest] = useState<Info>({
    model: "",
    mark: "",
    number: "",
    year: 0,
    driver_id: 0,
    status: {
      title: "",
      code: "",
    },
  });

  useEffect(() => {
    const getStatuses = GETSTATUS("car");
    getStatuses.then((resp) => {
      setStatuses(resp.data);
    });
  }, []);

  const renderCheckbox = () => {
    return (
      statuses &&
      statuses.map((item: Status, index: number) => {
        return (
          <option key={index} value={item.code}>
            {item.title}
          </option>
        );
      })
    );
  };

  const check = () => {
    let checkMass: Array<string | number> = [];

    const checkRequest = (mass: any) => {
      for (let item in mass) {
        if (typeof mass[item] === "object") {
          checkRequest(mass[item]);
        } else {
          checkMass.push(mass[item]);
        }
      }
    };

    if (addRequest.status.title === "") {
      addRequest.status = {
        title: "Эконом",
        code: "econom",
      };
    }
    
    checkRequest(addRequest);

    checkMass.forEach((item: string | number) => {
      if (item === "" || !item) {
        return;
      }
    });

    setAddNew(false);

    POST("car", addRequest);
    addRequest.model = "";
    addRequest.mark = "";
    addRequest.number = "";
    addRequest.year = 0;
    addRequest.driver_id = 0;
    addRequest.status.title = "";
    addRequest.status.code = "";
  };

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    addRequest.status.title = event.target.selectedOptions[0].innerText;
    addRequest.status.code = event.target.value;
  };

  const onChange = (event: any) => {
    const id: string = event.target.id;
    (addRequest as any)[id] = event.target.value;
  }

  return (
    <div className="table_section_add">
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          id="mark"
          onChange={onChange}
          placeholder="Brand"
        />
      </div>
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          id="model"
          onChange={onChange}
          placeholder="Modal"
        />
      </div>
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          maxLength={8}
          id="number"
          onChange={onChange}
          placeholder="Number car"
        />
      </div>
      <div className="table_section-block-input">
        <YearSelect
          id="year"
          onChange={onChange}
        />
      </div>
      <div className="table_section-block-input">
        <FindDriverId onChange={(id: string) => (addRequest.driver_id = +id)} />
      </div>
      <select className="table_section_add-select" onChange={changeSelect}>
        {renderCheckbox()}
      </select>
      <div className="table_section_buttons">
        <Button
          className="table_section-button"
          onClick={() => check()}
          btnText={<img src={addObj} alt="alt" />}
        />
        <Button
          className="table_section-button"
          onClick={() => setAddNew(false)}
          btnText={<img src={deleteObj} alt="alt" />}
        />
      </div>
    </div>
  );
};

export default AddForm;
