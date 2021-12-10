import { DriversPath, CarsPath } from "./pathes";
interface Route {
    path: string;
    title: string;
}

export const RoutesInfo: Route[] = [
    {
        path: DriversPath,
        title: "driver"
    },
    {
        path: CarsPath,
        title: "car"
    }
]