import { Data } from "../interfaces";
type Body = (info: Data) => { body: string; };

export const HEADERS: HeadersInit = {
    Accept: "application/json",
    "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
    "Content-Type": "application/json",
};

export const URL: string = "https://edu.evgeniychvertkov.com/v1/";

export const body: Body = (info: Data) => { return { body: JSON.stringify(info) } };
