import { useContext, ChangeEventHandler } from "react";
import { useSelector } from "react-redux";

import { filteredValuesContext } from "../../../context/context";
import Input from "../../regularComponents/input/Input";
import { Data } from '../../../interfaces/interfaces'
import { RootState } from "../../../store/rootReducer";

interface CurrentValue {
  current: Record<string, string>;
};

interface Props {
  searchDriver: ChangeEventHandler<HTMLInputElement>;
  resetFilters: () => void;
  data: Data[];
};

const DriverFilter = ({ searchDriver, resetFilters, data }: Props) => {
  const filtersValues: CurrentValue = useContext(filteredValuesContext);
  const statuses = useSelector((state: RootState) => state.statusReducer);


  return (
    <>
      <div className='filter_element-inputs'>
        <Input onChange={searchDriver}
          name="id"
          placeholder="Search by ID"
          value={(filtersValues.current as { [key: string]: string }).id || ""} />
        <Input
          onChange={searchDriver}
          name="first_name"
          placeholder="Search by name"
          value={(filtersValues.current as { [key: string]: string })["first_name"] || ""}
        />
        <Input
          onChange={searchDriver}
          name="last_name"
          placeholder="Search by surname"
          value={(filtersValues.current as { [key: string]: string })["last_name"] || ""}
        />
      </div>
      <div className='filter_element-inputRadio'>
        {statuses.length && statuses.map((item: any, index: number) => {
          return (
            <div className="filter-element" key={index}>
              <Input
                type="radio"
                name="status"
                id={"status" + index}
                onChange={searchDriver}
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
