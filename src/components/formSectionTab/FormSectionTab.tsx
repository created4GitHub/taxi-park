import React, { useState, useContext, useEffect } from "react";
import { NewContext, OneMoreContext } from "../formSection/FormSection";

import "./style.scss"

let url = "https://edu.evgeniychvertkov.com/v1/driver/";

const patchItem = (id : any, key : any, info : any) => {
    fetch(url + id +"/", {
        method: "PATCH",
        headers: {
          "Accept" : "application/json",
          "X-Authorization": "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key : info
        })
      })
}

const FormSectionTab = (props: any) => {
    let item = useContext(NewContext) as any;
    let itemInfo = useContext(OneMoreContext) as any;

    let [isDiv, setIsDiv] = useState(true);

    function changeElement(event: any) {
        if (event.target.id !== "id" && event.target.id !== "date_birth") {
            setIsDiv(!isDiv);
        }
    }
    
    const pressedEnter = (event: any) => {
        if(event.key === "Enter"){
            saveNewInfo(event.target.id, event.target.value || event.target.placeholder)
        }
    };

    const onBlur = (event: any) => {
        saveNewInfo(event.target.id, event.target.value || event.target.placeholder)
    };

    const saveNewInfo = (key : any, info : any) => {
        itemInfo[key] = info;
        setIsDiv(!isDiv);
    }

    let statuses = Object.values(props);

    const saveStatus = (event : any) => {
        type statusType ={
            title: string,
            code: string
        }
        let newStatus : statusType = {
            title: "",
            code: ""
        };
        for(let index : number = 0; index < statuses.length; index++){
            let status = (statuses[index] as statusType);
            if(status.title === event.target.value){
                newStatus.title = status.title;
                newStatus.code = status.code;
                break;
            }
        }
        itemInfo.status = newStatus;
        patchItem("status", newStatus);
    }

    return (
        <div className="table-section-tab"
        >
            {item[0] !== "status" ? (isDiv ? (
                <p
                    className="table_paragraph"
                    id={item[0]}
                    onClick={changeElement}
                >
                    {typeof item[1] !== "object" ? itemInfo[item[0]] : item[1].title}
                </p>
            ) : (
                <input
                    name="code"
                    type="text"
                    id={item[0]}
                    placeholder={typeof item[1] !== "object" ? itemInfo[item[0]] : item[1].title}
                    className="table_input"
                    autoFocus={true}
                    onClick={changeElement}
                    onBlur={onBlur}
                    onKeyPress={pressedEnter}
                />
            )) :
            <select onChange={saveStatus}>
                {statuses.length ? statuses.map((status : any, index : any) => {
                   return <option key={index}>{status.title}</option> 
                }) : <option>Загрузка</option> }
            </select>}
        </div>
    );
};

export default FormSectionTab;
