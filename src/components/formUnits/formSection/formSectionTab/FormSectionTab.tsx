import { useState, MouseEvent } from "react";

import Statuses from "../../../statuses/Statuses";

import { PATCH } from "../../../../requests/requests";

import { Data, Status } from "../../../../interfaces/interfaces";

import "./formSectionTab.style.scss";
import { RootState } from "../../../../store/rootReducer";
import { useSelector } from "react-redux";

type Props = {
  info: Data;
  item: [string, any];
  title: string;
  statuses: Status[];
};

const FormSectionTab = (props: Props) => {
  const statuses = useSelector((state: RootState) => state.statusReducer);
  let item = props.item;
  let itemInfo: any = props.info;

  const [isDiv, setIsDiv] = useState<boolean>(true);
  const [selectValue, setSelectValue] = useState<string>(item[1].title);

  function changeElement(event: MouseEvent<HTMLElement>) {
    let element: string = (event.target as HTMLElement).id;
    if (!["id", "date_birth", "date_created", "driver_id"].includes(element)) {
      setIsDiv(!isDiv);
    }
  };

  const saveNewInformation = (key: string, info: string | number | Status) => {
    itemInfo[key] = info;
    setIsDiv(!isDiv);
    console.log(key, info, itemInfo.id)
    PATCH(props.title, itemInfo.id, { [key]: info });
  };

  const pressedEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.target = event.target as HTMLInputElement;
      saveNewInformation(
        (event.target as HTMLInputElement).id,
        (event.target as HTMLInputElement).value ||
        (event.target as HTMLInputElement).placeholder
      );
    }
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    saveNewInformation(
      (event.target as HTMLElement).id,
      (event.target as HTMLInputElement).value ||
      (event.target as HTMLInputElement).placeholder
    );
  };

  const saveStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let status = statuses.find((status: Status) => status.title === event.target.value)!;
    console.log(status)
    saveNewInformation(event.target.id, status);
  };

  return (
    <>
      <div className="table-section-tab">
        {item[0] !== "status" ? (
          isDiv ? (
            <p className="table_paragraph" id={item[0]} onClick={changeElement}>
              {typeof item[1] !== "object" ? itemInfo[item[0]] : item[1].title}
            </p>
          ) : (
            <input
              name="code"
              type="text"
              id={item[0]}
              placeholder={
                typeof item[1] !== "object" ? itemInfo[item[0]] : item[1].title
              }
              className="table_input"
              autoFocus={true}
              onClick={changeElement}
              onBlur={onBlurEvent}
              onKeyPress={pressedEnter}
            />
          )
        ) : <Statuses defaultValue={selectValue} onChange={saveStatus} id={item[0]} />}
      </div>
    </>
  );
};

export default FormSectionTab;
