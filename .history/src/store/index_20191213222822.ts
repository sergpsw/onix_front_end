import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allTasks(state) {
      return state.tasks
    }
  },
});
