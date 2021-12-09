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
                <Routes>
                    {RoutesInfo.map(({ path, title }) =>
                        <Route key={title} path={path} element={
                            <>
                                {isAddNewUnit && <AddNewUnit title={title} />}
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
