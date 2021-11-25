import React, { useEffect, useState } from "react";

import "./style.scss";

import { PATCH } from "../../../../requests";

const FormSectionTab = (props: any) => {
  const [isDiv, setIsDiv] = useState(true);
  const [isUpdatedSelect, setIsUpdatedSelect] = useState("");

  let item = props.item;
  let itemInfo = props.info;

  useEffect(() => {
    if (item[1] === "status") {
      setIsUpdatedSelect(item[1].title);
    }
  }, [isUpdatedSelect]);

  function changeElement(event: any) {
    let element = event.target.id;
    if (
      element !== "id" &&
      element !== "date_birth" &&
      element !== "date_created"
    ) {
      setIsDiv(!isDiv);
    }
  }

  const pressedEnter = (event: any) => {
    if (event.key === "Enter") {
      saveNewInformation(
        event.target.id,
        event.target.value || event.target.placeholder
      );
    }
  };

  const onBlurEvent = (event: any) => {
    saveNewInformation(
      event.target.id,
      event.target.value || event.target.placeholder
    );
  };

  const saveNewInformation = (key: any, info: any) => {
    itemInfo[key] = info;
    setIsDiv(!isDiv);
    PATCH(props.title, itemInfo.id, { [key]: info });
  };

  const saveStatus = (event: any) => {
    type statusType = {
      title: string;
      code: string;
    };
    let newStatus: statusType = {
      title: "",
      code: "",
    };
    for (let index: number = 0; index < statuses.length; index++) {
      let status = statuses[index] as statusType;
      if (status.title === event.target.value) {
        newStatus.title = status.title;
        newStatus.code = status.code;
        break;
      }
    }
    itemInfo.status = newStatus;
    PATCH(props.title, itemInfo.id, { status: newStatus });
  };

  let statuses = Object.values(props.statuses);

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
              statuses.map((status: any, index: any) => {
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
