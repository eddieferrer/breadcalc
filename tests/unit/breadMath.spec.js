import { calcHydration } from "@/utils/breadMath";

/*
Example from freshLoaf:
Total Flour = 1000g (100%)
Total Water = 700g (70%)
Salt = 20g (2%)
PPF (Pre-Ferment) = 12% Levain Hydration = 100% - 
With this method the hydration of the Levain is always specified. In this example there is 120g water and 120g flour in the levain.
Total Dough Weight = 1720g
Hydration = (Total Water 700g) + (Total Flour 1000g) 700/1000= 70% Hydration
NOTE - the dough minus the Levain contains 580g Water and 880g Flour.
*/

describe("BreadMath Tests", () => {
  it("calcHydration", () => {
    let testObj = {
      flour: 1000,
      water: 700,
    };

    expect(calcHydration(testObj)).toBe(0.7);
  });
});
