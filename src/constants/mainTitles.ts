import { DRIVERSPATH, CARSPATH } from "./pathes";

import cars from "../ascets/img/svg/cars.svg";
import drivers from "../ascets/img/svg/drivers.svg";

interface Titles {
    path: string;
    name: string;
    title: string;
    src: string
}

export const TITLESLINKS: Titles[] = [
    {
        path: DRIVERSPATH,
        name: "Driver",
        title: "driver",
        src: drivers,
        
    },
    {
        path: CARSPATH,
        name: "Car",
        title: "car",
        src: cars,
    }
]
