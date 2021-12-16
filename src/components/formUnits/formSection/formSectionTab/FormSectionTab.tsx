import { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import Statuses from "../../../statuses/Statuses";
import { PATCH } from "../../../../requests/requests";
import { Data, Status } from "../../../../interfaces/interfaces";
import { dispatchIsDataUpdated as setIsDataUpdated } from "../../../../redux/actions/actions";
import { statusesSelector } from "../../../../redux/selectors/selector";

import "./formSectionTab.style.scss";

interface Props {
  value: string | number | Status;
  property: string;
  title: string;
  id: string;
  data: Data;
}

const FormSectionTab = ({ value, property, title, data, id }: Props) => {
  const statuses = useSelector(statusesSelector);
  const [selectValue, setSelectValue] = useState<string>((value as Status).title);
  const [isMutable, setIsMutable] = useState<boolean>(true);
  const dispatch = useDispatch();
  const elementInfo = ["id", "date_birth", "date_created", "driver_id"];
  let element: JSX.Element | null = null;

  const updateElementType = (event: MouseEvent<HTMLElement>) => {
    if (!elementInfo.includes(property)) {
      if (!((event.target as HTMLElement).className === "table_input")) {
        setIsMutable(!isMutable);
      }
    }
  }

  const saveNewInformation = (newValue: string | Status, property: string) => {
    (data[property as keyof Data] as string | Status) = newValue;
    setIsMutable(!isMutable);

    PATCH(title, id, { [property]: newValue });
    dispatch(setIsDataUpdated());
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      target.value 
      ? saveNewInformation(target.value, target.id) 
      : setIsMutable(!isMutable);
    }
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.value 
    ? saveNewInformation(target.value, target.id) 
    : setIsMutable(!isMutable);
  };

  const saveStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTitle = event.target.value;
    const status = statuses.find((status: Status) => status.title === newTitle)!;
    setSelectValue(newTitle);
    saveNewInformation(status, event.target.id);
  };

  if (property === "status") {
    element = (
      <select
        name="status"
        className="table_section-tab-select"
        value={selectValue}
        onChange={saveStatus}
        id={property}
      >
        <Statuses />
      </select>
    )
  } else {
    element = isMutable ?
      (
        <p className="table_paragraph" 
          onClick={updateElementType} 
          id={property}>
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
          onKeyPress={onKeyDown}
          id={property}
        />
      )
  }

  return (
    <div className="table-section-tab">
      {element}
    </div>
  );
};

export default FormSectionTab;
