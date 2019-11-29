<template>
  <div class="sidebar">
    <button class="btnSidebar btnShowNone" @click="displayNone"></button>
    <div class="sidebar-header">
      <div class="sidebar-header-logo">
        <span >{{logo}}</span>
      </div>
      <button class="sidebar-header-search"></button>
    </div>

    <div class="sidebar-person">
      <div class="sidebar-person-fotoUser"
        :style="{backgroundImage: 'url(' + require('../assets/img/' + fotoUser) + ')'}">
      </div>
      <div class="sidebar-person-info">
        <span>{{nameUser}}</span>
        <span>{{owner}}</span>
      </div>
      <button class="sidebar-person-btn"></button>
    </div>

    <div class="sidebar-tasks">
      <div class="tasks-completed" @click="tasksCompleted">
        <span class="count-completed">{{countCompletedTasks}}</span>
        <span>Completed Tasks</span>
      </div>
      <div class="tasks-open">
        <span class="count-open">{{countOpenTasks}}
        </span>
        <span>Open Tasks</span>
      </div>
    </div>

    <nav class="sidebar-menu">
      <button class="sidebar-menu-btn">Menu</button>
      <ul class="sidebar-menu-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">My Tasks</a></li>
        <li><a href="#">Notifications</a>
          <span class="count-img"> {{ countImg }} </span>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
import { eventEmitter } from '../main';

export default {
  name: 'Sidebar',
  data() {
    return {
      logo: 'Projectus',
      fotoUser: 'JeanG.jpg',
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
