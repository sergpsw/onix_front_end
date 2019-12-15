<template lang="pug">
  .sidebar
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
        span.tasks_text Completed Tasks
      .tasks-open
        span.count-open {{countOpenTasks}}
        span.tasks_text(@click="routerTasks") Open Tasks
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


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventEmitter } from '../main';

@Component({
  name: 'MainSidebar',
  computed: {
    countCompletedTasks() {
      return this.$store.getters.countCompletedTasks;
    },
  },
})

export default class MainSidebar extends Vue {
  logo: string = 'Projectus';

  foto: string = 'JeanG.jpg';

  nameUser: string = 'Jean Gonzales';

  owner: string = 'Product Owner';

  countOpenTasks: number = 11;

  countImg: number = 3;

  tasksCompleted(): void {
    if (this.countOpenTasks > 0) {
      if (window.confirm('Are you sure you want to change the number of tasks?')) {
        this.$store.state.countCompletedTasks += 1;
        this.countOpenTasks -= 1;
        if (this.countOpenTasks < 0) {
          this.countOpenTasks += 1;
        }
      }
    } else { alert('No open tasks!'); }// eslint-disable-line no-alert
  }

  routerTasks(): void {
    if (this.countOpenTasks > 0) {
      this.$router.push('/tasks');
    }
  }

  created(): void {
    eventEmitter.$on('clickedImg', (index: number) => {
      this.countImg = index;
    });
  }
}
</script>
