import Vue from 'vue';
import Vuex from 'vuex';
import { ITask } from '@/types/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.push(newTask);
    },
  },
  actions: {
    createTask({ commit }, newTask) {
      commit('createTask', newTask);
    },
  },
  modules: {
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
});
