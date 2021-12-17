import { DRIVERS_PATH, CARS_PATH } from "./pathes";

import cars from "../ascets/img/svg/cars.svg";
import drivers from "../ascets/img/svg/drivers.svg";

interface Pages {
    path: string;
    pageName: string;
    title: string;
    src: string
}

export const PAGES_LINKS: Pages[] = [
    {
        path: DRIVERS_PATH,
        title: "Driver",
        pageName: "driver",
        src: drivers,

    },
    {
        path: CARS_PATH,
        title: "Car",
        pageName: "car",
        src: cars,
    }
]
