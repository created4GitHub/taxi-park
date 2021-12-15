import { ChangeEvent, useMemo } from "react";
import { useIntl } from "react-intl";

<<<<<<< HEAD
import Input from "../../commons/input/Input";
import { CAR_INFO, DRIVE_INFO } from "../../../constants/filterInputs"
import { Filter } from "../../../interfaces/interfaces";
=======
import Input from "../../compose/input/Input";
import { CARINFO, DRIVERINFO } from "../../../constants/filterInputs"
>>>>>>> c8aa405497249a1dd157181eca6f891ef3aff3fd

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues: any;
}

interface Info {
    name: string;
    placeholder: string;
};

const uuid = require("react-uuid");

const FilterInputs = ({ filter, title, filterValues }: Props) => {
    const inputInfo = (title === "car" && CAR_INFO) || DRIVE_INFO;
    const intl = useIntl();
    const mapItems = ({ name, placeholder }: Info) => {
        return (
            <Input onChange={filter}
                key={name}
                name={name}
                placeholder={intl.formatMessage({ id: placeholder })}
                value={((filterValues as Filter[])[name as keyof Filter[]] as string) || ""}
            />
        )
    }

    const mappedItems = useMemo(() => inputInfo.map(mapItems), [inputInfo])

    return (
        <>
            <div className='filter_element-inputs'>
                {mappedItems}
            </div>
        </>
    );
}

export default FilterInputs;
