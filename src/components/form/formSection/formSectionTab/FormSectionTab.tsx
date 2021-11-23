import React, { useState } from "react";

import "./style.scss";

import { PATCH } from "../../../../requests"; 

const FormSectionTab = (props: any) => {
  let item = props.item;
  let itemInfo = props.info;
  let [isDiv, setIsDiv] = useState(true);

  function changeElement(event: any) {
    let element = event.target.id;
    if (element !== "id" && element !== "date_birth" && element !== "date_created") {
      setIsDiv(!isDiv);
    }
  }

  const pressedEnter = (event: any) => {
    if (event.key === "Enter") {
      saveNewInfo(
        event.target.id,
        event.target.value || event.target.placeholder
      );
    }
  };

  const onBlur = (event: any) => {
    saveNewInfo(
      event.target.id,
      event.target.value || event.target.placeholder
    );
  };

  const saveNewInfo = (key: any, info: any) => {
    itemInfo[key] = info;
    setIsDiv(!isDiv);
    PATCH("url", itemInfo.id, { [key]: info });
  };

  let statuses = Object.values(props.statuses);

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
    PATCH("url", itemInfo.id, { status: newStatus });
  };
  return (
    <>
      <div className="table-section-tab">
        {item[0] !== "status" ? (
          isDiv ? (
            <p className="table_paragraph" id={item[0]} onClick={changeElement}>
              {typeof item[1] !== "object" ? itemInfo[item[0]] 
              : item[1].title}
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
              onBlur={onBlur}
              onKeyPress={pressedEnter}
            />
          )
        ) : (
          <select onChange={saveStatus} className="table-section-tab-select" >
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
