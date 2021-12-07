import { Data, Status } from "../interfaces/interfaces";

interface Response {
  is_error: string;
  status: string;
  data: Data[];
}

interface StatusResponse {
  is_error: string;
  status: string;
  data: Status[];
}


export const GET = async (title: string, id?: number): Promise<Data[] | Data> => {
  const query = (id && `${title}/${id}`) || `${title}`;
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${query}/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Authorization":
          "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json",
      },
    }
  );
  const info = await response.json();
  const convertDate = (item: Data): Data | Data[] => {
    item.date_birth = new Date(item.date_birth!).toLocaleDateString();
    item.date_created = new Date(item.date_created!).toLocaleDateString();
    return item;
  }
  if (id) {
    return convertDate(info.data);
  }
  else if (title === "driver") {
    return info.data.map((item: Data) => convertDate(item));
  }
  return info.data;
};

export const GET_CARS_BY_DRIVER = async (id: string): Promise<Response> => {
  const response = await fetch("https://edu.evgeniychvertkov.com/v1/car/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
      "Content-Type": "application/json",
      "E-Driver-Id": id,
    },
  });
  return await response.json();
};

export const GETSTATUS = async (title: string): Promise<StatusResponse> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${title}-status/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Authorization":
          "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

export const POST = async (title: string, info: Data): Promise<Response> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${title}/`,
    {
      method: "POST",
      headers: {
        "X-Authorization":
          "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }
  );
  return await response.json();
};

export const PATCH = async (
  title: string,
  id: number,
  info: { [key: string]: string | number | Status }
): Promise<Response> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${title}/` + id + "/",
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "X-Authorization":
          "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }
  );
  return await response.json();
};

export const REMOVE = async (title: string, id: number): Promise<Response> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${title}/` + id + "/",
    {
      method: "DELETE",
      headers: {
        "X-Authorization":
          "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};
