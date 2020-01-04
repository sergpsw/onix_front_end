
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

export const eventEmitter = new Vue();// eslint-disable-line import/prefer-default-export

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
