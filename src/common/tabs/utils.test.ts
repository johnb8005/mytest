import * as U from "./utils";

describe("toHref", () => {
  test("from label", () => {
    expect(U.toHref({ label: "a" }, "/prefix")).toEqual("/prefix/a");
  });

  test("with link", () => {
    expect(U.toHref({ label: "a", link: "/my/path" }, "/prefix")).toEqual(
      "/prefix/my/path"
    );
  });
});

test("getIsSelected", () => {
  expect(
    U.getIsSelected("/my/path", "/my", [{ path: "/my" }, { path: "/" }])
  ).toEqual(true);
});
