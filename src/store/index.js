import Vue from "vue";
import Vuex from "vuex";
import {
  calcHydration,
  calcPercentage,
  calcFromPercentage,
} from "@/utils/breadMath";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    levainFlour(state, n) {
      state.levain.flour = n;
    },
    levainWater(state, n) {
      state.levain.water = n;
    },
    doughFlour(state, n) {
      state.dough.flour = n;
    },
    doughWater(state, n) {
      state.dough.water = n;
    },
    doughSalt(state, n) {
      state.dough.salt = n;
    },
    doughLevain(state, n) {
      state.dough.levain = n;
    },
  },
  actions: {},
  modules: {},
  getters: {
    levainFlour: (state) => {
      return state.levain?.flour;
    },
    levainWater: (state) => {
      return state.levain?.water;
    },
    levainFlourPercentage: (state) => {
      return calcPercentage({
        total: state.levain?.water + state.levain?.flour,
        target: state.levain?.flour,
      });
    },
    levainWaterPercentage: (state) => {
      return calcPercentage({
        total: state.levain?.water + state.levain?.flour,
        target: state.levain?.water,
      });
    },
    levainWaterGrams: (state, getters) => {
      return calcFromPercentage({
        total: state.dough?.levain,
        percentage: getters.levainWaterPercentage,
      });
    },
    levainFlourGrams: (state, getters) => {
      return calcFromPercentage({
        total: state.dough?.levain,
        percentage: getters.levainFlourPercentage,
      });
    },
    levainHydration: (state) => {
      return calcHydration({
        flour: state.levain?.flour,
        water: state.levain?.water,
      });
    },
    doughFlour(state) {
      return state.dough?.flour;
    },
    doughWater(state) {
      return state.dough?.water;
    },
    doughSalt(state) {
      return state.dough?.salt;
    },
    doughLevain(state) {
      return state.dough?.levain;
    },
    totalFlour(state, getters) {
      return getters.levainFlourGrams + getters.doughFlour;
    },
    totalWater(state, getters) {
      return getters.levainWaterGrams + getters.doughWater;
    },
  },
});
