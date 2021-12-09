import { Data } from "../interfaces/interfaces";
type Body = (info: Data) => { body: string; };


export const headers: HeadersInit = {
    Accept: "application/json",
    "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
    "Content-Type": "application/json",
};

export const url: string = "https://edu.evgeniychvertkov.com/v1/";

export const body: Body = (info: Data) => { return { body: JSON.stringify(info) } };