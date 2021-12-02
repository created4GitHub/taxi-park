import { useState, MouseEvent } from "react";

import { PATCH } from "../../../../requests";

import { Info, Status } from "../../../../interfaces";

import "./formSectionTab.style.scss";

type Props = {
  info: Info;
  item: [string, any];
  title: string;
  statuses: Status[];
};

const FormSectionTab = (props: Props) => {
  let item = props.item;
  let itemInfo: any = props.info;

  const [isDiv, setIsDiv] = useState<boolean>(true);
  const [selectValue, setSelectValue] = useState<string>(item[1].title);

  function changeElement(event: MouseEvent<HTMLElement>) {
    let element: string = (event.target as HTMLElement).id;
    if (!["id", "date_birth", "date_created", "driver_id"].includes(element)) {
      setIsDiv(!isDiv);
    }
  }

  const saveNewInformation = (
    key: string,
    info: string | number | Status) => {
    itemInfo[key] = info;
    setIsDiv(!isDiv);
    PATCH(props.title, itemInfo.id, { [key]: info });
  };

  const pressedEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      saveNewInformation(
        (event.target as HTMLElement).id,
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
    setSelectValue(newStatus.title);
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
            defaultValue={item[1].title}
            onChange={saveStatus}
            className="table-section-tab-select"
          >
            {statuses.length && statuses.map((status: Status, index: number) => {
              return <option key={index}>{status.title}</option>;
            })
            }
          </select>
        )}
      </div>
    </>
  );
};

export default FormSectionTab;
