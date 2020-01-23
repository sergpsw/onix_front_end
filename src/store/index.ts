import Vue from 'vue';
import Vuex from 'vuex';
import { ITask } from '@/types/tasks';

Vue.use(Vuex);

const tasks: ITask[] = [];
let countCompletedTasks: number;
let countOpenTasks: number;
let taskId: number;
let isModalDetails: string;

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    countCompletedTasks: 372,
    countOpenTasks: 11,
    taskId: 0,
    isModalDetails: false,
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
      return state.tasks.length;
    },
    taskById(state) {
      // eslint-disable-next-line
      return (id) => {
        return state.tasks[id];
      };
      // return id => {
      //   return state.tasks.find(el => {
      //     return el.id === id;
      //   });
      // };
    },
  },
});
