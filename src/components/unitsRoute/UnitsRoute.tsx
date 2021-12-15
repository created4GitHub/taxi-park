import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import FormUnits from "../formUnits/FormUnits";
import { RoutesInfo } from "../../constants/routesInfo"
import { RootState } from "../../redux/rootReducer";
import { isAddNewUnitSelector } from "../../redux/selectors/selector";
import AddNewCar from "../addNewUnit/AddNewCar";
import AddNewDriver from "../addNewUnit/AddNewDriver";
interface RouteProp {
    path: string;
    title: string;
}

const uuid = require("react-uuid");

const UnitsRoute = () => {
    const isAddNewUnit = useSelector(isAddNewUnitSelector);
    const mapItems = ({ path, title }: RouteProp) => {
        return (
            <Route key={uuid()} path={path} element={
                <>
                    {isAddNewUnit && (isAddNewUnit === "car" ? <AddNewCar title={title} />
                        : <AddNewDriver title={title} />)}
                    <FormUnits title={title} />
                </>
            } />
        )
    }

    const mappedItems = RoutesInfo.map(mapItems);

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
