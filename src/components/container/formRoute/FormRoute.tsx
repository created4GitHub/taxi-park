import { Routes, Route } from "react-router-dom";

import AddNewUnit from "../../addNewUnit/AddNewUnit";
import FormUnits from "../../formUnits/FormUnits";
import { Info } from "../../../constants/FormRoute"

interface Props {
    isAddNew: boolean;
}

export default function FormRoute({ isAddNew }: Props) {

    return (
        <div className="content__inform">
            <div className="table">
                {Info.map(({ path, title }) =>
                    <Routes key={title}>
                        <Route
                            path={path}
                            element={
                                <>
                                    {isAddNew && <AddNewUnit title={title} />}
                                    <FormUnits title={title} />
                                </>}
                        /><Route />
                    </Routes>
                )}
            </div>
        </div>
    )
}