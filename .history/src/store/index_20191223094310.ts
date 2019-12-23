import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let countCompletedTasks: number;
let countOpenTasks: number;

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    countCompletedTasks: 372,
    countOpenTasks: 11,
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, id) {
      state.tasks.splice(id, 1);
      state.countCompletedTasks += 1;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask({ commit }, newTask) {
      commit('createTask', newTask);
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
    },
  },
  modules: {
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    countCompletedTasks(state) {
      return state.countCompletedTasks;
    },
    countOpenTasks(state) {
      return state.tasks.length+4;
    },
  },
});
