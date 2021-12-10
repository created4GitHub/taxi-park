import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import FormUnits from "../formUnits/FormUnits";
import { RoutesInfo } from "../../constants/routesInfo"
import { RootState } from "../../redux/rootReducer";
import { isAddNewUnitSelector } from "../../constants/selectors/selector";

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
                    {isAddNewUnit}
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
