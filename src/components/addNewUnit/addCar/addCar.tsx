import {
  useState,
  useEffect,
  useRef,
  LegacyRef,
  MutableRefObject,
} from "react";
import { useDispatch } from 'react-redux';

import FindDriverId from "../../findDriverId/FindDriverId";
import YearSelect from "../../yearSelect/YearSelect";
import Input from "../../regularComponents/input/Input";
import { Button } from "../../regularComponents/button/Button";

import { openAddNewModal, closeAddNewModal } from "../../../store/actions/action";

import { POST, GETSTATUS } from "../../../requests";

import { Info, Status } from "../../../interfaces";

import addObj from "../../../img/addObj.svg";
import deleteObj from "../../../img/deleteObj.svg";

import "./addCar.style.scss";

const AddForm = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statuses, setStatuses] = useState(new Array<Status>());
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
  let placeholders: string[];
  let status: { title: string, code: string };

  if (title === "car") {
    placeholders = ["Brand", "Model", "Number Car"];
    status = { title: "Эконом", code: "econom" };
  }
  else {
    placeholders = ["Name", "Surname", "Number Car"];
    status = { title: "Активный", code: "active" };
  }

  const item: Info = { status };

  const dispatch = useDispatch();

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
    console.log((formRef.current as HTMLFormElement).elements)
    let values = (formRef.current as HTMLFormElement).elements;
    for (let item of Object.keys(values)) {
      console.log(values[item].value)
    }
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

    for (let index of checkMass) {
      if (index === "" || !index) {
        return;
      }
    }
    // setModalContext(false);
    POST("car", addRequest);

  };

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    addRequest.status.title = event.target.selectedOptions[0].innerText;
    addRequest.status.code = event.target.value;
  };

  return (
    <form ref={formRef} className="table_section_add">
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          onChange={(event) => (item.mark = event.target.value)}
          placeholder="Brand"
        />
      </div>
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          onChange={(event) => (item.model = event.target.value)}
          placeholder="Modal"
        />
      </div>
      <div className="table_section-block-input">
        <Input
          className="table_section-input"
          maxLength={8}
          onChange={(event) => (item.number = event.target.value)}
          placeholder="Number car"
        />
      </div>
      <div className="table_section-block-input">
        <YearSelect
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            (item.year = +event.target.value)
          }
        />
      </div>
      <div className="table_section-block-input">
        <FindDriverId onChange={(id: string) => (item.driver_id = +id)} />
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
          // onClick={() => setModalContext(false)}
          btnText={<img src={deleteObj} alt="alt" />}
        />
      </div>
    </form>

  );
};

export default AddForm;
