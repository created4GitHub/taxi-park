export interface Info {
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
