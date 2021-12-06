import { useState, MouseEvent } from "react";

import Statuses from "../../../statuses/Statuses";

import { PATCH } from "../../../../requests/requests";

import { Data, Status } from "../../../../interfaces/interfaces";

import "./formSectionTab.style.scss";
import { RootState } from "../../../../store/rootReducer";
import { useSelector } from "react-redux";

interface Props {
  value: string | number | Status;
  property: string;
  title: string;
  data: Data;
}

const FormSectionTab = ({ value, property, title, data }: Props) => {
  const statuses = useSelector((state: RootState) => state.statusReducer);
  const [isDiv, setIsDiv] = useState<boolean>(true);
  const id = data.id!;

  function updateElement(event: MouseEvent<HTMLElement>) {
    let element: string = (event.target as HTMLElement).id;
    if (!["id", "date_birth", "date_created", "driver_id"].includes(element)) {
      setIsDiv(!isDiv);
    }
  }

  const saveNewInformation = (property: string, newValue: string) => {
    (data as any)[property as keyof Data] = newValue;
    setIsDiv(!isDiv);
    PATCH(title, id, { [property]: newValue });
  };

  const pressedEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      saveNewInformation(target.id, target.value || target.placeholder);
    }
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    saveNewInformation(target.id, target.value || target.placeholder);
  };

  const saveStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = statuses.find(
      (status: Status) => status.title === event.target.value
    )!;
    PATCH(title, +event.target.id, { [property]: status });
  };

  return (
    <>
      <div className="table-section-tab">
        {property !== "status" ? (
          isDiv ? (
            <p className="table_paragraph" id={property} onClick={updateElement} >
              {value}
            </p>
          ) : (
            <input
              name="code"
              type="text"
              id={property}
              placeholder={String(value)}
              className="table_input"
              autoFocus={true}
              onClick={updateElement}
              onBlur={onBlurEvent}
              onKeyPress={pressedEnter}
            />)
        ) : (
          <Statuses
            defaultValue={(value as Status).title}
            onChange={saveStatus}
            id={property}
          />
        )}
      </div>
    </>
  );
};

export default FormSectionTab;
