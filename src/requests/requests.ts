import { Data, Status } from "../interfaces/interfaces";
import { HEADERS } from "../constants/requests";
import { createRequest, convertDate } from "../helpers/helpers";

interface Response {
  is_error: string;
  status: string;
  data: Data[];
}

export const GET = async (title: string, id?: number): Promise<Data | Data[]> => {
  const param: string = id ? title + "/" + id : title;
  const data = await createRequest(param, "GET");
  if (id || title === "driver") {
    return convertDate(data, title);
  }
  return data;
}

export const GET_STATUS = async (title: string): Promise<Status[]> => {
  title = title + "-status";
  return await createRequest(title, "GET");
};

export const GET_CARS_BY_DRIVER = async (id: string): Promise<Data[] | Data> => {
  const currentHeader: HeadersInit = { ...HEADERS, "E-Driver-Id": id };
  return await createRequest("car", "GET", currentHeader);
};

export const POST = async (title: string, body: Data): Promise<Response> => {
  return await createRequest(title, "POST", null, body);
};

export const PATCH = async (title: string, id: string, body: Record<string, string | number | Status>)
  : Promise<Response> => {
  const param = title + id + "/";
  return await createRequest(param, "PATCH", null, body);
};

export const REMOVE = async (title: string, id: number): Promise<Response> => {
  const param = `${title}/` + id + "/";
  return await createRequest(param, "DELETE", null);
};
