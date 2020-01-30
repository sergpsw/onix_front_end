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
    editedTask(state, { id, title, description }) {
      const editTasks: ITask[] = state.tasks.concat();
      const idx: any = editTasks.find((task:any) => task.id === id);
      const task = editTasks[idx];
      tasks[idx] = { ...task, title, description };
      state.tasks = editTasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateDateTime(state, { id, dateTime }) {
      const updTasks: ITask[] = state.tasks.concat();
      const idx: any = updTasks.find((task:any) => task.id === id);
      const task = updTasks[idx];
      const status: any = new Date(dateTime) > new Date() ? 'in progress' : 'to do';
      // const dateTime2: string = (dateTime).format('dd MM YYYY');
      tasks[idx] = { ...task, status, dateTime };
      state.tasks = updTasks;
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
    editedTask({ commit }, payload) {
      commit('editedTask', payload);
    },
    updateDateTime({ commit }, payload) {
      commit('updateDateTime', payload);
    },
  },
  modules: {
  },
  getters: {
    allTasks: state => state.tasks,
    countCompletedTasks: state => state.countCompletedTasks,
    countOpenTasks: state => state.tasks.length,
    taskById: state => (id:number) => state.tasks.find((task:ITask) => task.id === id),
    taskTodo: state => state.tasks.filter((task:ITask) => task.status === 'todo'),
    taskInprogress: state => state.tasks.filter((task:ITask) => task.status === 'in progress'),
    taskDone: state => state.tasks.filter((task:ITask) => task.status === 'done'),
  },
});
