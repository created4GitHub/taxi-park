import { useEffect, useState, MouseEvent, Dispatch, SetStateAction } from "react";

import "./formSectionTab.style.scss";

import { PATCH } from "../../../../requests";

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
  item: [string, any];
  title: string;
  statuses: Status[];
};

const FormSectionTab = (props: PropsStatus) => {
  
  const [isDiv, setIsDiv] = useState<boolean>(true);
  const [isUpdatedSelect, setIsUpdatedSelect]: [string, Dispatch<SetStateAction<string>>] = useState("");
  let item = props.item;
  let itemInfo: any = props.info;

  useEffect(() => {
    if (item[1] === "status") {
      setIsUpdatedSelect(item[1].title);
    }
  }, [isUpdatedSelect]);

  function changeElement(event: MouseEvent<HTMLElement>) {
    let element: string = (event.target as HTMLElement).id;

    if (
      element !== "id" &&
      element !== "date_birth" &&
      element !== "date_created" && 
      element !== 'driver_id'
    ) {
      setIsDiv(!isDiv);
    }
  }

  const pressedEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      saveNewInformation(
        (event.target as HTMLElement).id,
        (event.target as HTMLInputElement).value || (event.target as HTMLInputElement).placeholder
      );
    }
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    saveNewInformation(
      (event.target as HTMLElement).id,
      (event.target as HTMLInputElement).value || (event.target as HTMLInputElement).placeholder
    );
  };

  const saveNewInformation = (key: string, info: string) => {
    // InfoType[key] = info;
    setIsDiv(!isDiv);
    PATCH(props.title, itemInfo.id, { [key]: info });
  };

  const saveStatus = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let newStatus: Status = {
      title: "",
      code: "",
    };

    for (let index: number = 0; index < statuses.length; index++) {
      let status = statuses[index] as Status;
      if (status.title === (event.target as HTMLInputElement).value) {
        newStatus.title = status.title;
        newStatus.code = status.code;

        break;
      }
    }
    itemInfo.status = newStatus;
    PATCH(props.title, itemInfo.id, { status: newStatus });
  };

  let statuses: Status[] = Object.values(props.statuses);

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
        ) : (
          <select
            value={item[1].title}
            onChange={saveStatus}
            className="table-section-tab-select"
          >
            {statuses.length ? (
              statuses.map((status: Status, index: number) => {
                return <option key={index}>{status.title}</option>;
              })
            ) : (
              <option>Загрузка</option>
            )}
          </select>
        )}
      </div>
    </>
  );
};

export default FormSectionTab;
