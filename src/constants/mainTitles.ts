import { DriversPath, CarsPath } from "./pathes";

import cars from "../img/cars.svg";
import drivers from "../img/drivers.svg";

interface Titles {
    path: string;
    name: string;
    title: string;
    src: string
}

export const TitlesLinks: Titles[] = [
    {
        path: DriversPath,
        name: "Driver",
        title: "driver",
        src: drivers,
        
    },
    {
        path: CarsPath,
        name: "Car",
        title: "car",
        src: cars,
    }
]