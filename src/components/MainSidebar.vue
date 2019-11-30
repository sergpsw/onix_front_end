<template lang="pug">
  .sidebar
    button.btnSidebar.btnShowNone(@click="displayNone")
    .sidebar-header
      .sidebar-header-logo
        span {{logo}}
      button.sidebar-header-search
    .sidebar-person
      .sidebar-person-fotoUser(:style="{backgroundImage:'url('+require('../assets/img/'+foto)+')'}")
      .sidebar-person-info
        span {{nameUser}}
        span {{owner}}
      button.sidebar-person-btn
    .sidebar-tasks
      .tasks-completed(@click="tasksCompleted")
        span.count-completed {{countCompletedTasks}}
        span Completed Tasks
      .tasks-open
        span.count-open {{countOpenTasks}}
        span Open Tasks
    nav.sidebar-menu
      button.sidebar-menu-btn Menu
      ul.sidebar-menu-nav
        li
          a(href='#') Home
        li
          a(href='#') My Tasks
        li
          a(href='#') Notifications
          span.count-img {{ countImg }}
</template>


<script>
import { eventEmitter } from '../main';

export default {
  name: 'Sidebar',
  data() {
    return {
      logo: 'Projectus',
      foto: 'JeanG.jpg',
      nameUser: 'Jean Gonzales',
      owner: 'Product Owner',
      countCompletedTasks: 372,
      countOpenTasks: 11,
      countImg: 3,
    };
  },
  methods: {
    displayNone() {
      document.querySelector('.sidebar').style.display = 'none';
    },
    tasksCompleted() {
      if (this.countOpenTasks > 0) {
        if (window.confirm('Are you sure you want to change the number of tasks?')) {
          this.countCompletedTasks += 1;
          this.countOpenTasks -= 1;
          if (this.countOpenTasks < 0) {
            this.countOpenTasks = +1;
          }
        }
      } else { console.log('No open tasks!'); }
    },
  },
  created() {
    eventEmitter.$on('clickedImg', (index) => {
      this.countImg = index;
    });
  },
};
</script>
