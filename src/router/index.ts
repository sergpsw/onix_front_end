import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'tasks',
  },

  {
    path: '/tasks',
    // /name: 'tasks',
    component: () => import('../views/Tasks.vue'),
  },

  {
    path: '/kanban',
    // name: 'kanban',
    component: () => import('../views/Kanban.vue'),
  },

  {
    path: '/activity',
    // name: 'activity',
    component: () => import('../views/Activity.vue'),
  },

  {
    path: '/calendar',
    // name: 'calendar',
    component: () => import('../views/Calendar.vue'),
  },

  {
    path: '/files',
    // name: 'files',
    component: () => import('../views/Files.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
