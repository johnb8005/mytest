import * as U from "./utils";

const date = new Date(Date.UTC(2021, 3, 12));

test("toISODate", () => {
  console.log(date.toISOString());
  expect(U.toISODate(date)).toEqual("2021-04-12");
});

test("formatOutDefault", () => {
  expect(U.formatOutDefault(date)).toEqual("12/04/2021");
});

test("getNoOfDays", () => {
  const out = U.getNoOfDays(2021, 4 - 1);
  expect(out.blankdaysArray).toEqual([1, 2, 3, 4]);
  expect(out.daysArray.length).toEqual(30);
});
