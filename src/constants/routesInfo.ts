import { DRIVERS_PATH, CARS_PATH } from "./pathes";
interface Route {
    path: string;
    pageName: string;
}

export const ROUTES_INFO: Route[] = [
    {
        path: DRIVERS_PATH,
        pageName: "driver"
    },
    {
        path: CARS_PATH,
        pageName: "car"
    }
]