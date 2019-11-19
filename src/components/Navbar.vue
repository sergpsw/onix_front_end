<template>
  <header class="navbar">
    <div class="navbar-title">
      <div class="navbar-title-left">
        <span class="navbar-title-left-text">{{titleName}}</span>
        <button class="navbar-title-left-btn"></button>
      </div>
      <div class="navbar-title-right">
        <div class="navbar-title-right-photo user1"></div>
        <div class="navbar-title-right-photo user2"></div>
        <div class="navbar-title-right-photo user3"></div>
        <button class="navbar-title-right__share">Share</button>
        <button class="navbar-title-right__chat">Chat</button>
      </div>
    </div>
    <nav class="navbar-navigation">
      <ul>
        <li><a href="#" @click="showTasks">Tasks</a></li>
        <li><a href="#">Kanban</a></li>
        <li><a href="#" @click="showChat">Activity</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#">Files</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      titleName: 'Website Redesign',
      shows: {
        view: true,
      }
    }
  },
  props: {    
    viTasks: Boolean
  },
  methods: {
    showTasks() {
      this.$emit("showTasks", this.shows.view);
    },
    showChat() {
      this.$emit("showChat", this.shows.view);
    }
  }
}
</script>