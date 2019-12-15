import Vue from 'vue';
import Vuex from 'vuex';
import { ITask } from '@/types/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: ITask[] = [
      { title: 'Task1', text: 'Buy water', time: '2.12.19' },
      { title: 'Task2', text: 'Buy bread', time: '4.12.19' },
      { title: 'Task3', text: 'Buy oil', time: '8.12.19' },
      { title: 'Task4', text: 'Buy vegetables', time: '16.12.19' },
      { title: 'Task5', text: 'Buy fruits', time: '3.12.19' },
    ];
  },
  mutations: {
    createTask(state, newTask): void {
      state.tasks.unshift(newTask)
    }
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
