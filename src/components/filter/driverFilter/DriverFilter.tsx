import React, { useEffect } from 'react';

import DayForm from '../../formData/dataDay/day'
import MontForm from '../../formData/dataMont/mont';
import YearForm from '../../formData/dataYear/year';
import Input from '../../input';

export default function DriverFilter(props : any) {
    const options: { [key: string]: { type: string, placeholder?: string } } = {
        id: {
            type: "input",
            placeholder: "ID"
        },
        name: {
            type: "input",
            placeholder: "First and Last names"
        },
        date_created: {
            type: "date"
        },

    }
    return <div>Cars</div>
    // return (
    //     <>
    //         {Object.keys(options).map((key: string, index: number) => {
    //             if (options[key].type === "input") {
    //                 return <Input {
    //                     ...{
    //                         className: options[key].type + "_" + key,
    //                         type: "text",
    //                         name: key,
    //                         placeholder: "Search for " + options[key].placeholder,
    //                         onChange: () => console.log("hey")
    //                     }
    //                 }
    //                 />
    //             }
    //             else if(options[key].type === "date"){
    //                 return (
    //                     <div>
    //                 <DayForm/>
    //                 <MontForm/>
    //                 <YearForm onChange={(e: any) => console.log(e)}/>
    //                 </div>
    //                 )
    //             }

    //         })}
    //     </>
    // )
}


{/* <div className="content__options-filter">
<div className='content__options-filter date'>
<div className='content__options-search'>
</div>
</div>
</div> */}