import { Routes, Route } from "react-router-dom";

import AddNewUnit from "../../addNewUnit/AddNewUnit";
import FormUnits from "../../formUnits/FormUnits";

interface Props {
    isAddNew: boolean;
}

interface Info {
    path: string;
    title: string;
}

export default function RouteComponents({ isAddNew }: Props) {

    const info: Info[] = [
        {
            path: "/drivers",
            title: "driver"
        },
        {
            path: "/cars",
            title: "car"
        },
    ]

    return (
        <>
            {info.map(({ path, title }: Info) =>
                <Routes>
                    <Route
                        key={title}
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