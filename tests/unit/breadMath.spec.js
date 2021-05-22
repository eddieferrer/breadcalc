import { calcHydration } from "@/utils/breadMath";

describe("BreadMath Tests", () => {
  it("calcHydration", () => {
    let testObj = {
      flour: 1000,
      water: 700,
    };

    expect(calcHydration(testObj)).toBe(70);
  });
});
