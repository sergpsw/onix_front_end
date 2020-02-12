import Vue from 'vue';
import Vuex from 'vuex';
import { ITask } from '@/types/tasks';
import { IActivity } from '@/types/activity';
// import { getTasks } from '@/service/tasksApi';
// import tasks from './modules/tasks';
// import activity from './modules/activity';

const tasks: ITask[] = [];
let countCompletedTasks: number;
let countOpenTasks: number;
let isModalDetails: string;
let activityDate: string;
const ActivityBlock: IActivity[] = [];
let imgs: string[];

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countCompletedTasks: 372,
    countOpenTasks: 11,
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    isModalDetails: false,
    activityDate: 'Today',
    ActivityBlock: [
      {
        text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
        time: '8:40 PM',
      },
      {
        text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
        time: '7:32 PM',
      },
      {
        text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
      },
      {
        text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
        time: '6:02 PM',
      },
    ],
    imgs: [
      'img1.jpg',
      'img2.jpg',
      'img3.jpg',
      'img4.jpg',
    ],
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
      const status: any = new Date(dateTime) > new Date() ? 'inprogress' : 'done';
      tasks[idx] = { ...task, status, dateTime };
      state.tasks = updTasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateStatus(state, { id, status }) {
      const updTasks: ITask[] = state.tasks.concat();
      const idx: any = updTasks.find((task:any) => task.id === id);
      const task = updTasks[idx];
      tasks[idx] = { ...task, id, status };
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
    updateStatus({ commit }, payload) {
      commit('updateStatus', payload);
    },
  },
  getters: {
    countCompletedTasks: state => state.countCompletedTasks,
    countOpenTasks: state => state.tasks.length,
    //
    allTasks: state => state.tasks,
    taskById: state => (id:number) => state.tasks.find((task:ITask) => task.id === id),
    taskTodo: state => state.tasks.filter((task:ITask) => task.status === 'todo'),
    taskInprogress: state => state.tasks.filter((task:ITask) => task.status === 'inprogress'),
    taskDone: state => state.tasks.filter((task:ITask) => task.status === 'done'),
    //
    activityDate: state => state.activityDate,
    ActivityBlock: state => state.ActivityBlock,
    imgs: state => state.imgs,
  },
  modules: {
    // tasks,
    // activity,
  },
});
