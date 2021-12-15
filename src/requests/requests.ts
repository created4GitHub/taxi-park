import { Data, Status } from "../interfaces/interfaces";
import { HEADERS, URL, body } from "../constants/requests";

interface Response {
  is_error: string;
  status: string;
  data: Data[];
}

export const GET = async (title: string, id?: number): Promise<Data[] | Data> => {
  const query = (id && `${title}/${id}`) || `${title}`;
  const response = await fetch(
    URL + `${query}/`,
    {
      method: "GET",
      headers: HEADERS,
    }
  );
  const jsonData = await response.json();
  const convertDate = (item: Data): Data | Data[] => {
    item.date_birth = new Date(item.date_birth!).toLocaleDateString();
    item.date_created = new Date(item.date_created!).toLocaleDateString();
    return item;
  }
  if (id) {
    return convertDate(jsonData.data);
  }
  else if (title === "driver") {
    return jsonData.data.map((item: Data) => convertDate(item));
  }
  return jsonData.data;
};

export const GET_CARS_BY_DRIVER = async (id: string): Promise<Response> => {
  const currentHeader: HeadersInit = { ...HEADERS, "E-Driver-Id": id };
  const response = await fetch(URL + "car/", {
    method: "GET",
    headers: currentHeader
  });
  return await response.json();
};

export const GET_STATUS = async (title: string): Promise<Status[]> => {
  const response = await fetch(
    URL + `${title}-status/`,
    {
      method: "GET",
      headers: HEADERS,
    }
  );
  const jsonStatuses = await response.json();
  return jsonStatuses.data;
};

export const POST = async (title: string, info: Data): Promise<Response> => {
  const response = await fetch(
    URL + `${title}/`,
    {
      method: "POST",
      headers: HEADERS,
      ...body(info),
    }
  );
  return await response.json();
};

export const PATCH = async (
  title: string,
  id: string,
  info: { [key: string]: string | number | Status }
): Promise<Response> => {
  const response = await fetch(
    URL + `${title}/` + id + "/",
    {
      method: "PATCH",
      headers: HEADERS,
      ...body(info),
    }
  );
  return await response.json();
};

export const REMOVE = async (title: string, id: number): Promise<Response> => {
  const response = await fetch(
    URL + `${title}/` + id + "/",
    {
      method: "DELETE",
      headers: HEADERS,
    }
  );
  return await response.json();
};
