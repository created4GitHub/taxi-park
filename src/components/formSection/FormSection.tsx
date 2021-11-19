import React, { useContext } from "react";
import { Context } from "../form/Form";

import FormSectionTab from "../formSectionTab/FormSectionTab";

export const NewContext = React.createContext(null);
export const OneMoreContext = React.createContext(null);

const FormSection = (props: any) => {
    console.log(props)
    let itemInfo = useContext(Context) as any;
    let check = (Object.entries(itemInfo) as any);
    return (
        <div className="table_section">
            {check.map((item: any, index: any) => {
                return (
                <NewContext.Provider value={item} key={index}>
                    <OneMoreContext.Provider value={itemInfo} key={index}>
                        <FormSectionTab {...props.statuses}/>
                        </OneMoreContext.Provider>
                </NewContext.Provider>
                )
            })}
        </div>
    );
};

export default FormSection;