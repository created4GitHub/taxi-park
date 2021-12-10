import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import AddNewDriver from "../addNewUnit/AddNewDriver";
import AddNewCar from "../addNewUnit/AddNewCar";
import FormUnits from "../formUnits/FormUnits";
import { RoutesInfo } from "../../constants/routesInfo"
import { RootState } from "../../store/rootReducer";

const UnitsRoute = () => {
    const isAddNewUnit = useSelector((state: RootState) => state.isAddNewUnit);

    return (
        <div className="content__inform">
            <div className="table">
                <Routes>
                    {RoutesInfo.map(({ path, title }) =>
                        <Route key={title} path={path} element={
                            <>
                                {isAddNewUnit && <AddNewDriver />}
                                <FormUnits title={title} />
                            </>
                        } />
                    )}
                </Routes>
            </div>
        </div>
    )
}

export default UnitsRoute;
