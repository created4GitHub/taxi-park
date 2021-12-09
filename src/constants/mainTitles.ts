import { DriversPath, CarsPath } from "./pathes";
interface Titles {
    path: string;
    title: string;
}

export const TitlesLinks: Titles[] = [
    {
        path: DriversPath,
        title: "Driver"
    },
    {
        path: CarsPath,
        title: "Car"
    }
]