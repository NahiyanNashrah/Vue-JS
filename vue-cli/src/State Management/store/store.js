import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter;
    },
    stringCounter(state) {
      return state.counter + " clicks";
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    }
  },
  actions: {
    asyncIncrement: (context, payload) => {
      setTimeout(() => {
        context.commit("increment", payload.by);
      }, payload.duration);
    },
    asyncDecrement: (context, payload) => {
      setTimeout(() => {
        context.commit("decrement", payload.by);
      }, payload.duration);
    }
  }
});
