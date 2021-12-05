import {
  useContext,
  ChangeEventHandler,
  MouseEventHandler,
  Dispatch,
  SetStateAction,
} from "react";

import { receivedDataContext, filteredValuesContext } from "../../../context/context";

import Input from "../../regularComponents/input/Input";
import YearSelect from "../../yearSelect/YearSelect";

import { Data, Status } from "../../../interfaces/interfaces";

interface CurrentValue {
  current: Record<string, string>;
};

interface Props {
  searchCar: ChangeEventHandler<HTMLInputElement>;
  resetFilters: MouseEventHandler<HTMLButtonElement>;
};

interface ReceivedData {
  info: Data[];
  statuses: Status[];
};

const DriverFilter = (props: Props) => {
  const [receivedData, setReceivedData]: [
    ReceivedData,
    Dispatch<SetStateAction<ReceivedData>>
  ] = useContext(receivedDataContext);
  const filtersValues: CurrentValue = useContext(filteredValuesContext);

  const searchCar: ChangeEventHandler<HTMLElement> = props.searchCar;
  const resetFilters: MouseEventHandler<HTMLButtonElement> = props.resetFilters;

  return (
    <>
      <div className="filter_element-inputs">
        <Input
          onInput={searchCar}
          name="id"
          placeholder="Search by ID"
          value={(filtersValues.current as { [key: string]: string }).id || ""}
        />
        <Input
          onInput={searchCar}
          name="driver_id"
          placeholder="Search by driver ID"
          value={
            (filtersValues.current as { [key: string]: string })["driver_id"] ||
            ""
          }
        />
        <Input
          onInput={searchCar}
          name="mark"
          placeholder="Search by brand"
          value={
            (filtersValues.current as { [key: string]: string }).mark || ""
          }
        />
        <Input
          onInput={searchCar}
          name="model"
          placeholder="Search by model"
          value={
            (filtersValues.current as { [key: string]: string }).model || ""
          }
        />
        <Input
          onInput={searchCar}
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
                  onChange={searchCar}
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
        <YearSelect onChange={searchCar} name="year" defaultValue={"2018"} />
      </div>
      <div className="reset-filter-button">
        <button onClick={resetFilters}>Reset</button>
      </div>
    </>
  );
};

export default DriverFilter;
