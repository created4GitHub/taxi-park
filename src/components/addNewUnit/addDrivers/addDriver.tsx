import {
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import { Context } from "../../../context";

import Input from "../../regularComponents/input/Input";
import { Button } from "../../regularComponents/button/Button";

import { POST, GETSTATUS } from "../../../requests";

import { Info, Status } from "../../../interfaces";

import addObj from "../../../img/addObj.svg";
import deleteObj from "../../../img/deleteObj.svg";

import "./addDriver.style.scss";

const AddDrivers = () => {
  const [statuses, setStatuses] = useState<Status[]>();
  const [context, setContext]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(Context);
  const [addRequest] = useState<Info>({
    first_name: "",
    last_name: "",
    date_birth: 0,
    status: {
      title: "",
      code: "",
    },
  });

  useEffect(() => {
    GETSTATUS("driver").then((resp) => {
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

    checkRequest(addRequest);

    if (addRequest.status.title === "") {
      addRequest.status = {
        title: "Активный",
        code: "active",
      };
    }

    checkMass.forEach((item: any) => {
      if (item === "" || !item) {
        return;
      }
    })

    POST("driver", addRequest);
    setContext(false);
    addRequest.first_name = "";
    addRequest.last_name = "";
    addRequest.date_birth = 0;
    addRequest.status.title = "";
    addRequest.status.code = "";
  };

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    addRequest.status.title = event.target.selectedOptions[0].innerText;
    addRequest.status.code = event.target.value;
  };

  const onChange = (event: any) => {
    const id: string = event.target.id;

    if(event.target.id === 'date_birth'){
      (addRequest as any)[id] = Date.parse(event.target.value);
    } else {
      (addRequest as any)[id] = event.target.value;
    }
  }

  return (
    <div className="table_section_add">
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          id='first_name'
          onChange={onChange}
          placeholder="Name"
        />
      </div>
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          id='last_name'
          onChange={onChange}
          placeholder="first name"
        />
      </div>
      <div className="table_section-block-input">
        <Input
          type="date"
          className="table_section-input"
          id='date_birth'
          onChange={onChange}
        />
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
          onClick={() => setContext(false)}
          btnText={<img src={deleteObj} alt="alt" />}
        />
      </div>
    </div>
  );
};

export default AddDrivers;
