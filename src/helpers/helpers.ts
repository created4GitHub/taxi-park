import { URL, HEADERS } from "../constants/requests";
import { Data } from "../interfaces/interfaces";

interface Request {
    method: string;
    headers?: HeadersInit;
    body?: string;
}

export const createRequest = async (param: string, method: string, headers?: 
    HeadersInit | null, body?: Data) => {
    const currentHeader = headers || HEADERS;
    const request: Request = {
        method: method,
        headers: currentHeader
    }
    if (body) {
        request.body = JSON.stringify(body)
    }
    const data = await fetch(
        URL + param + "/",
        request
    );
    const jsonData = await data.json();
    return jsonData.data;
};

export const convertDate = (data: Data | Data[], title: string) => {
    const convert = (item: Data) => {
        item.date_birth = new Date(item.date_birth!).toLocaleDateString();
        item.date_created = new Date(item.date_created!).toLocaleDateString();
        return item;
    }
    if (Array.isArray(data)) {
        return (data as Data[]).map(item => convert(item));
    }
    return convert(data as Data);
}