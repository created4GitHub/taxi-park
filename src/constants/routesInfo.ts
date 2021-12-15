import { DRIVERSPATH, CARSPATH } from "./pathes";
interface Route {
    path: string;
    title: string;
}

export const ROUTESINFO: Route[] = [
    {
        path: DRIVERSPATH,
        title: "driver"
    },
    {
        path: CARSPATH,
        title: "car"
    }
]