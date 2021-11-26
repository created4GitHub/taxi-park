import { useContext, Dispatch, SetStateAction, ChangeEventHandler, MouseEventHandler } from "react";

import { receivedDataContext, filteredValuesContext } from "../../../context";

import Input from "../../regularComponents/input/Input";

type Current = {
  current: Record<string, string>;
}

type qwerty = {
  search: ChangeEventHandler<HTMLInputElement>;
  resetFilters: MouseEventHandler<HTMLButtonElement>;
}

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
  info: InfoType[];
  statuses: Status[];
};


const DriverFilter = (props : qwerty) => {
  const [receivedData, setReceivedData]: [PropsStatus, Dispatch<SetStateAction<PropsStatus>>] = useContext(receivedDataContext);
  const filtersValues: Current  = useContext(filteredValuesContext);

  const search: ChangeEventHandler<HTMLInputElement> | undefined = props.search;
  const resetFilters: MouseEventHandler<HTMLButtonElement> | undefined = props.resetFilters;

  return (
    <>
      <div className='filter_element-inputs'>
        <Input onChange={search}
          name="id"
          placeholder="Search by ID"
          value={(filtersValues.current as { [key: string]: string }).id || ""} />
        <Input
          onChange={search}
          name="first_name"
          placeholder="Search by name"
          value={(filtersValues.current as { [key: string]: string })["first_name"] || ""}
        />
        <Input
          onChange={search}
          name="last_name"
          placeholder="Search by surname"
          value={(filtersValues.current as { [key: string]: string })["last_name"] || ""}
        />
      </div>
      <div className='filter_element-inputRadio'>
        {receivedData.statuses &&
          receivedData.statuses.map((item: any, index: number) => {
            return (
              <div className="filter-element" key={index}>
                <Input
                  type="radio"
                  name="status"
                  id={"status" + index}
                  onChange={search}
                  value={item.title}
                  checked={(filtersValues.current as { [key: string]: string }).status === item.title}
                />
                <label htmlFor={"status" + index}>{item.title}</label>
              </div>
            );
          })}
      </div>
      <div className="reset-filter-button">
        <button
          onClick={resetFilters}>
          Reset
        </button>
      </div>
    </>
  );
}

export default DriverFilter;
