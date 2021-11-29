import {
  useContext,
  ChangeEventHandler,
  MouseEventHandler,
  Dispatch,
  SetStateAction,
} from "react";

import { receivedDataContext, filteredValuesContext } from "../../../context";

import Input from "../../regularComponents/input/Input";
import YearSelect from "../../yearSelect/YearSelect";

import { Info, Status } from "../../../interfaces";

interface Current {
  current: Record<string, string>;
}
interface Props {
  search: ChangeEventHandler<HTMLInputElement>;
  resetFilters: MouseEventHandler<HTMLButtonElement>;
}

interface Data {
  info: Info[];
  statuses: Status[];
}

const DriverFilter = (props: Props) => {
  const [receivedData, setReceivedData]: [
    Data,
    Dispatch<SetStateAction<Data>>
  ] = useContext(receivedDataContext);
  const filtersValues: Current = useContext(filteredValuesContext);

  const search: ChangeEventHandler<HTMLElement> = props.search;
  const resetFilters: MouseEventHandler<HTMLButtonElement> = props.resetFilters;

  return (
    <>
      <div className="filter_element-inputs">
        <Input
          onInput={search}
          name="id"
          placeholder="Search by ID"
          value={(filtersValues.current as { [key: string]: string }).id || ""}
        />
        <Input
          onInput={search}
          name="driver_id"
          placeholder="Search by driver ID"
          value={
            (filtersValues.current as { [key: string]: string })["driver_id"] ||
            ""
          }
        />
        <Input
          onInput={search}
          name="mark"
          placeholder="Search by mark"
          value={
            (filtersValues.current as { [key: string]: string }).mark || ""
          }
        />
        <Input
          onInput={search}
          name="model"
          placeholder="Search by model"
          value={
            (filtersValues.current as { [key: string]: string }).model || ""
          }
        />
        <Input
          onInput={search}
          name="number"
          placeholder="Search by number"
          value={
            (filtersValues.current as { [key: string]: string }).number || ""
          }
        />
      </div>
      <div className="filter_element-inputRadio">
        {receivedData.statuses &&
          receivedData.statuses.map((item: any, index: number) => {
            return (
              <div className="filter_element-radio" key={index}>
                <Input
                  type="radio"
                  name="status"
                  id={"status" + index}
                  onChange={search}
                  value={item.title}
                  checked={
                    (filtersValues.current as { [key: string]: string })
                      .status === item.title
                  }
                />
                <label htmlFor={"status" + index}>{item.title}</label>
              </div>
            );
          })}
      </div>
      <div className="filter_element-yearSelect">
        <YearSelect onChange={search} name="year" defaultValue={"2018"} />
      </div>
      <div className="reset-filter-button">
        <button onClick={resetFilters}>Reset</button>
      </div>
    </>
  );
};

export default DriverFilter;
