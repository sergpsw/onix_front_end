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
        <li><a href="#":class="activeLinkTasks" @click="showTasks">Tasks</a></li>
        <li><a href="#">Kanban</a></li>
        <li><a href="#" :class="activeLinkChat" @click="showChat">Activity</a></li>
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
      },
      activeLinkTasks: '',
      activeLinkChat: 'activeLink',
      activeLink: 'activeLink',
      deactiveLink: ''
    }
  },
  methods: {
    showTasks() {
      this.$emit("showTasks", this.shows.view);
      this.activeLinkTasks = this.activeLink;
      this.activeLinkChat = this.deactiveLink;
    },
    showChat() {
      this.$emit("showChat", this.shows.view);
      this.activeLinkChat = this.activeLink;
      this.activeLinkTasks = this.deactiveLink;
    }
  }
}
</script>
