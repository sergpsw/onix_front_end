import Vue from 'vue';
import Vuex from 'vuex';
import { ITask } from '@/types/tasks';

Vue.use(Vuex);

const tasks: ITask[] = [];
let countCompletedTasks: number;
let countOpenTasks: number;

export default new Vuex.Store({
  state: {
    tasks,
    countCompletedTasks: 372,
    countOpenTasks: 11,
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);
    },
    deleteTask(state, id) {
      state.tasks.splice(id, 1);
      state.countCompletedTasks += 1;
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
      return state.tasks.length + 4;
    },
  },
});
