import { useContext, ChangeEventHandler, MouseEventHandler } from "react";

import Input from "../../regularComponents/input/Input";

import { Data, Status } from '../../../interfaces/interfaces'
import { RootState } from "../../../store/rootReducer";
import { useSelector } from "react-redux";
interface CurrentValue {
  current: Record<string, string>;
};

interface Props {
  searchDriver: ChangeEventHandler<HTMLInputElement>;
  resetFilters: () => void;
  data: Data[];
};

interface Info {
  name: string;
  placeholder: string;
};

const DriverFilter = ({ searchDriver, resetFilters, }: Props) => {
  // const filtersValues: CurrentValue = useContext(filteredValuesContext);
  const statuses = useSelector((state: RootState) => state.statusReducer);

  const info: Info[] = [
    {
      name: "id",
      placeholder: "Search by ID"
    },
    {
      name: "first_name",
      placeholder: "Search by name"
    },
    {
      name: "last_name",
      placeholder: "Search by surname"
    }
  ];

  // if (title === "car") {
  //   info = [
  //     {
  //       name: "id",
  //       placeholder: "Search by ID"
  //     },
  //     {
  //       name: "driver_id",
  //       placeholder: "Search by driver ID"
  //     },
  //     {
  //       name: "mark",
  //       placeholder: "Search by mark"
  //     },
  //     {
  //       name: "model",
  //       placeholder: "Search by model"
  //     },
  //     {
  //       name: "number",
  //       placeholder: "Search by number"
  //     },
  //   ]
  // }


  return (
    <>
      <div className='filter_element-inputs'>
        <Input onChange={searchDriver}
          name="id"
          placeholder="Search by ID"
        // value={(filtersValues.current as { [key: string]: string }).id} 
        />
        <Input
          onChange={searchDriver}
          name="first_name"
          placeholder="Search by name"
        // value={(filtersValues.current as { [key: string]: string }).first_name}
        />
        <Input
          onChange={searchDriver}
          name="last_name"
          placeholder="Search by surname"
        // value={(filtersValues.current as { [key: string]: string }).last_name}
        />
      </div>
      <div className='filter_element-inputRadio'>
        {statuses?.map((item: any, index: number) => {
          return (
            <div className="filter-element" key={index}>
              <Input
                type="radio"
                name="status"
                id={"status" + index}
                onChange={searchDriver}
                value={item.title}
              // checked={(filtersValues.current as { [key: string]: string }).status === item.title}
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
