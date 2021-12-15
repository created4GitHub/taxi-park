import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import FormUnits from "../formUnits/FormUnits";
import { ROUTESINFO } from "../../constants/routesInfo"
import { isAddNewUnitSelector } from "../../redux/selectors/selector";
import AddNewCar from "../addNewUnit/AddNewCar";
import AddNewDriver from "../addNewUnit/AddNewDriver";

interface RouteProp {
    path: string;
    title: string;
}

const UnitsRoute = () => {
    const isAddNewUnit = useSelector(isAddNewUnitSelector);
    const mapItems = ({ path, title }: RouteProp) => {
        return (
            <Route key={title} path={path} element={
                <>
                    {isAddNewUnit && (isAddNewUnit === "car" ? <AddNewCar title={title} />
                        : <AddNewDriver title={title} />)}
                    <FormUnits title={title} />
                </>
            } />
        )
    }

    const mappedItems = useMemo(() => ROUTESINFO.map(mapItems), [isAddNewUnit]);

    return (
        <div className="content__inform">
            <div className="table">
                <Routes>
                    {mappedItems}
                </Routes>
            </div>
        </div>
    )
}

export default UnitsRoute;
