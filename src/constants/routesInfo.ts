import { DRIVERS_PATH, CARS_PATH } from "./pathes";
interface Route {
    path: string;
    title: string;
}

export const ROUTES_INFO: Route[] = [
    {
        path: DRIVERS_PATH,
        title: "driver"
    },
    {
        path: CARS_PATH,
        title: "car"
    }
]