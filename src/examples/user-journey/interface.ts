import { DataInterface } from "../../common/user-journey/crud/type";
import { Data } from "./type";

const arr: Data[] = [
  { uuid: "u1", name: "myInstance" },
  { uuid: "u2", name: "myInstance2" },
];

export const detail = (uuid: string): Promise<Data> => {
  console.log("INTERFACE: getting the data");
  const a = arr.find((x) => x.uuid === uuid);
  if (!a) {
    return Promise.reject("could not find item");
  }
  return Promise.resolve(a);
};

export const list = (): Promise<Data[]> => {
  return Promise.resolve(arr);
};

export const insert = (data: Omit<Data, "uuid">): Promise<{ uuid: string }> =>
  Promise.resolve({ uuid: "u1" });

export const update = (uuid: string, data: Partial<Data>) => {
  console.log("INTERFACE: updating the data");
  return Promise.resolve(true);
};

export const deleteByUuid = (uuid: string) => {
  console.log("INTERFACE: delete entry: " + uuid);
  return Promise.resolve(undefined);
};

export const dataInterface: DataInterface<Data> = {
  detail,
  update,
  deleteByUuid,
  list,
  insert,
};
