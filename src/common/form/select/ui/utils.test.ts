import * as U from "./utils";

test("getValue", () => {
  expect(U.getValue("2")).toEqual(2);
  expect(U.getValue("hey")).toEqual("hey");
  expect(U.getValue(undefined)).toEqual(undefined);
  expect(U.getValue(null)).toEqual(undefined);
  expect(U.getValue("")).toEqual(undefined);
});
