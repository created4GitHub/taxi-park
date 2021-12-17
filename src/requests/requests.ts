import { Data, Status, BodyType } from "../interfaces";
import { HEADERS } from "../constants/requests";
import { createRequest, createGetRequest, convertDate } from "../helpers";

interface Response {
  is_error: string;
  status: string;
  data: Data[];
}

export const GET = async (pageName: string, id?: number): Promise<Data | Data[]> => {
  const query: string = id ? pageName + "/" + id : pageName;
  const data = await createGetRequest(query);
  if (id || pageName === "driver") {
    return convertDate(data);
  }
  return data;
}

export const GET_STATUS = async (pageName: string): Promise<Status[]> => {
  pageName = pageName + "-status";
  return await createGetRequest(pageName);
};

export const GET_CARS_BY_DRIVER = async (id: string): Promise<Data[] | Data> => {
  const currentHeader: HeadersInit = { ...HEADERS, "E-Driver-Id": id };
  return await createGetRequest("car", currentHeader);
};

export const POST = async (pageName: string, body: Data): Promise<Response> => {
  return await createRequest(pageName, "POST", null, body);
};

export const PATCH = async (pageName: string, id: string, body: BodyType)
  : Promise<Response> => {
  const query = pageName + "/" + id;
  return await createRequest(query, "PATCH", null, body);
};

export const REMOVE = async (pageName: string, id: number): Promise<Response> => {
  const query = pageName + "/" + id;
  return await createRequest(query, "DELETE", null);
};
