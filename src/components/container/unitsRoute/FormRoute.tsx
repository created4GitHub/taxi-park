import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import AddNewUnit from "../../addNewUnit/AddNewUnit";
import FormUnits from "../../formUnits/FormUnits";
import { RoutesInfo } from "../../../constants/RoutesInfo"
import { RootState } from "../../../store/rootReducer";

const UnitsRoute = () => {
    const isAddNewUnit = useSelector((state: RootState) => state.isAddNewUnit);

    return (
        <div className="content__inform">
            <div className="table">
                {RoutesInfo.map(({ path, title }) =>
                    <Routes key={title}>
                        <Route
                            path={path}
                            element={
                                <>
                                    {isAddNewUnit && <AddNewUnit title={title} />}
                                    <FormUnits title={title} />
                                </>}
                        /><Route />
                    </Routes>
                )}
            </div>
        </div>
    )
}

export default UnitsRoute;
