import { Routes, Route } from "react-router-dom";

import AddNewUnit from "../../addNewUnit/AddNewUnit";
import FormUnits from "../../formUnits/FormUnits";
import { Info } from "../../../constants/RouteComponents"

interface Props {
    isAddNew: boolean;
}

export default function RouteComponents({ isAddNew }: Props) {

    return (
        <>
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
        </>
    )
}