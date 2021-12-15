export interface Data {
  id?: number;
  first_name?: string;
  last_name?: string;
  date_birth?: number | string;
  date_created?: number | string;
  mark?: string;
  model?: string;
  number?: string;
  driver_id?: number;
  year?: number;
  status?: {
    title: string;
    code: string;
  };
}

export interface Status {
  title: string;
  code: string;
}

export interface ActionType<T> {
  type: string;
  payload?: T;
}

export interface Route {
  path: string;
  title: string;
}

export interface Filter {
  driver_id?: string,
  id?: string,
  mark?: string,
  model?: string,
  number?: string,
  status?: string,
  title?: string,
  year?: string,
  first_name?: string,
  last_name?: string,
}

export interface CarFormik {
  mark: string;
  model: string;
  number: string;
  driver_id: string | number;
  year: string | number;
  status: {
    title: string;
    code: string;
  } | string;
}

export interface DriverFormik {
  first_name: string;
  last_name: string;
  date_birth: number | string;
  status: {
    title: string;
    code: string;
  } | string;
}
