import { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import Statuses from "../../../statuses/Statuses";
import { PATCH } from "../../../../requests/requests";
import { RootState } from "../../../../store/rootReducer";
import { Data, Status } from "../../../../interfaces/interfaces";
import { dispatchIsDataUpdated } from "../../../../store/actions/actions";

import "./formSectionTab.style.scss";

interface Props {
  value: string | number | Status;
  property: string;
  title: string;
  id: string;
  data: Data;
}

const FormSectionTab = ({ value, property, title, data, id }: Props) => {
  const statuses = useSelector((state: RootState) => state.statuses);
  const isData = useSelector((state: RootState) => state.isDataUpdated);
  const [selectValue, setSelectValue] = useState<string>((value as Status).title);
  const [isDiv, setIsDiv] = useState<boolean>(true);
  const dispatch = useDispatch();

  const updateElementType = (event: MouseEvent<HTMLElement>) => {
    if (!["id", "date_birth", "date_created", "driver_id"].includes(property)) {
      if (!((event.target as HTMLElement).className === "table_input")) {
        setIsDiv(!isDiv);
      }
    }
  }

  const saveNewInformation = (newValue: string | Status) => {
    (data[property as keyof Data] as string | Status) = newValue;
    setIsDiv(!isDiv);
    PATCH(title, id, { [property]: newValue });
    dispatch(dispatchIsDataUpdated(!isData));
  };

  const pressedEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      target.value ? saveNewInformation(target.value) : setIsDiv(!isDiv);
    }
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.value ? saveNewInformation(target.value) : setIsDiv(!isDiv);
  };

  const saveStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTitle = event.target.value;
    const status = statuses.find((status: Status) => status.title === newTitle)!;
    setSelectValue(newTitle);
    saveNewInformation(status);
  };

  return (
    <>
      <div className="table-section-tab">
        {property !== "status" ? (
          isDiv ? (
            <p className="table_paragraph" onClick={updateElementType} >
              {data[property as keyof Data]}
            </p>
          ) : (
            <input
              type="text"
              placeholder={String(data[property as keyof Data])}
              className="table_input"
              autoFocus={true}
              onClick={updateElementType}
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
