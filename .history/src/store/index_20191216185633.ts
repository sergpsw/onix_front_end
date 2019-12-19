import Vue from 'vue';
import Vuex from 'vuex';
import { ITask } from '@/types/tasks';

Vue.use(Vuex);

const tasksDef: ITask[] = [
  { title: 'Task1', text: 'Buy water', time: '2.12.19' },
  { title: 'Task2', text: 'Buy bread', time: '4.12.19' },
  { title: 'Task3', text: 'Buy oil', time: '8.12.19' },
  { title: 'Task4', text: 'Buy vegetables', time: '16.12.19' },
  { title: 'Task5', text: 'Buy fruits', time: '3.12.19' },
];
let countCompletedTasks: number;
let countOpenTasks: number;

export default new Vuex.Store({
  state: {
    tasks: tasksDef.concat(JSON.parse(localStorage.getItem('tasks') || '[]')),
    countCompletedTasks: 372,
    countOpenTasks: 11,
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.push(newTask);
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
  },
});
