import { DriversPath, CarsPath } from "./pathes";
interface Titles {
    path: string;
    name: string;
    title: string;
}

export const TitlesLinks: Titles[] = [
    {
        path: DriversPath,
        name: "Driver",
        title: "driver"
    },
    {
        path: CarsPath,
        name: "Car",
        title: "car"
    }
]