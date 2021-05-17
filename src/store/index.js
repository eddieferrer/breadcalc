import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    levain: {
      flour: null,
      water: null,
    },
  },
  mutations: {
    levainFlour(state, n) {
      state.levain.flour = n;
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
  },
});
