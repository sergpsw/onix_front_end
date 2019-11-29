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
    path: '/activity',
    // name: 'activity',
    component: () => import('../views/Activity.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
