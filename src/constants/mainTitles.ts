import { DRIVERS_PATH, CARS_PATH } from "./pathes";

import cars from "../ascets/img/svg/cars.svg";
import drivers from "../ascets/img/svg/drivers.svg";

interface Titles {
    path: string;
    name: string;
    title: string;
    src: string
}

export const TITLES_LINKS: Titles[] = [
    {
        path: DRIVERS_PATH,
        name: "Driver",
        title: "driver",
        src: drivers,

    },
    {
        path: CARS_PATH,
        name: "Car",
        title: "car",
        src: cars,
    }
]
