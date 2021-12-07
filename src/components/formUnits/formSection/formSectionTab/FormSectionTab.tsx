import { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import Statuses from "../../../statuses/Statuses";

import { PATCH } from "../../../../requests/requests";
import { RootState } from "../../../../store/rootReducer";
import { Data, Status } from "../../../../interfaces/interfaces";

import "./formSectionTab.style.scss";
import { setIsUpdatedData } from "../../../../store/actions/actions";

interface Props {
  value: string | number | Status;
  property: string;
  title: string;
  data: Data;
}

const FormSectionTab = ({ value, property, title, data }: Props) => {
  const statuses = useSelector((state: RootState) => state.statusReducer);
  const isData = useSelector((state: RootState) => state.IsUpdatedReducer);
  const [selectValue, setSelectValue] = useState<string>((value as Status).title);
  const [isDiv, setIsDiv] = useState<boolean>(true);
  const id = data.id!;
  const dispatch = useDispatch();

  function updateElement(event: MouseEvent<HTMLElement>) {
    const element: string = (event.target as HTMLElement).id;
    if (!["id", "date_birth", "date_created", "driver_id"].includes(element)) {
      setIsDiv(!isDiv);
    }
  }

  const saveNewInformation = (property: string, newValue: string) => {
    (data[property as keyof Data] as string) = newValue;
    setIsDiv(!isDiv);
    dispatch(setIsUpdatedData(!isData))
    PATCH(title, id, { [property]: newValue });
  };

  const pressedEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      saveNewInformation(target.name, target.value || target.placeholder);
    }
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    saveNewInformation(target.name, target.value || target.placeholder);
  };

  const saveStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = statuses.find(
      (status: Status) => status.title === event.target.value
    )!;

    dispatch(setIsUpdatedData(!isData))
    setSelectValue(event.target.value);
    PATCH(title, id, { [property]: status });
  };
  
  return (
    <>
      <div className="table-section-tab">
        {property !== "status" ? (
          isDiv ? (
            <p className="table_paragraph" onClick={updateElement} >
              {data[property as keyof Data]}
            </p>
          ) : (
            <input
              type="text"
              name={property}
              placeholder={String(data[property as keyof Data])}
              className="table_input"
              autoFocus={true}
              onClick={updateElement}
              onBlur={onBlurEvent}
              onKeyPress={pressedEnter}
            />)
        ) : (
          <Statuses
            value={selectValue}
            onChange={saveStatus}
            id={property}
          />
        )}
      </div>
    </>
  );
};

export default FormSectionTab;