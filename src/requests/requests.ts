import { Data, Status, BodyType } from "../interfaces";
import { HEADERS } from "../constants/requests";
import { createRequest, createGetRequest, convertDate } from "../helpers";

interface Response {
  is_error: string;
  status: string;
  data: Data[];
}

export const GET = async (title: string, id?: number): Promise<Data | Data[]> => {
  const query: string = id ? title + "/" + id : title;
  const data = await createGetRequest(query);
  if (id || title === "driver") {
    return convertDate(data, title);
  }
  return data;
}

export const GET_STATUS = async (title: string): Promise<Status[]> => {
  title = title + "-status";
  return await createGetRequest(title);
};

export const GET_CARS_BY_DRIVER = async (id: string): Promise<Data[] | Data> => {
  const currentHeader: HeadersInit = { ...HEADERS, "E-Driver-Id": id };
  return await createGetRequest("car", currentHeader);
};

export const POST = async (title: string, body: Data): Promise<Response> => {
  return await createRequest(title, "POST", null, body);
};

export const PATCH = async (title: string, id: string, body: BodyType)
  : Promise<Response> => {
  const query = title + "/" + id;
  return await createRequest(query, "PATCH", null, body);
};

export const REMOVE = async (title: string, id: number): Promise<Response> => {
  const query = title + "/" + id;
  return await createRequest(query, "DELETE", null);
};
