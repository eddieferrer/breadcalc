import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/store";

Vue.use(Vuex);

const myStore = new Vuex.Store(store);

function isLocalStorageNameSupported() {
  var testKey = "test",
    storage = window.localStorage;
  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

myStore.subscribe((mutation, state) => {
  if (state && isLocalStorageNameSupported()) {
    localStorage.setItem("state", JSON.stringify(state));
  }
});

export default myStore;
