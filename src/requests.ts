import { Information, Status } from "./interfaces";

interface Response {
  is_error: string;
  status: string;
  data?: Information[];
}

interface InfoResponse {
  is_error: string;
  status: string;
  data: Information[];
}

interface StatusResponse {
  is_error: string;
  status: string;
  data: Status[];
}

export const GET = async (param: string): Promise<InfoResponse> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${param}/`,
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

export const POST = async (param: string, info: Information): Promise<Response> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${param}/`,
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
  param: string,
  id: number,
  info: { [key: string]: string | number | Status }
): Promise<Response> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${param}/` + id + "/",
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

export const REMOVE = async (param: string, id: number): Promise<Response> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${param}/` + id + "/",
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

export const GETDRIVERBYCAR = async (id: string): Promise<InfoResponse> => {
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

export const GETSTATUS = async (param: string): Promise<StatusResponse> => {
  const response = await fetch(
    `https://edu.evgeniychvertkov.com/v1/${param}-status/`,
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
