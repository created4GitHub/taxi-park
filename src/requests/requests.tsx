export const GET = (param: string) => {
  return fetch(
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
  ).then((resp) => resp.json());
}

export const POST = (param: string, id: number, info: any) => {
  return fetch(`https://edu.evgeniychvertkov.com/v1/${param}/` + id + "/", {
    method: "POST",
    headers: {
      "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  });
}

export const PATCH = (param: string, id: number, info: any) => {
  return fetch(`https://edu.evgeniychvertkov.com/v1/${param}/` + id + "/", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
}

export const REMOVE = (param : string, id: number, info: any) => {
  return fetch(`https://edu.evgeniychvertkov.com/v1/${param}/` + id + "/", {
    method: "DELETE",
    headers: {
      "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  });
}
