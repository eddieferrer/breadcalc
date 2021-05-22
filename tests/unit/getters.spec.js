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

import store from "@/store/store";
import Vuex from "vuex";

import { createLocalVue } from "@vue/test-utils";

describe("store/DemoStore", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const testState = {
    levain: {
      flour: 120,
      water: 120,
    },
    dough: {
      flour: 880,
      water: 580,
      salt: 20,
      levain: 240,
    },
  };
  const demoStore = new Vuex.Store({
    state: testState,
    mutations: {},
    actions: {},
    modules: {},
    getters: store.getters,
  });

  it("doughSalt", () => {
    let result = demoStore.getters.doughSalt;
    expect(result).toBe(20);
  });
  it("totalFlour", () => {
    const resultTest = demoStore.getters.totalFlour;
    console.log(resultTest);
    // assert the resultTest
    expect(resultTest).toEqual(1000);
  });
});
