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
        <li><router-link :class="styleLink" to="/tasks">Tasks</router-link></li>
        <li><router-link :class="styleLink" to="/">Kanban</router-link></li>
        <li><router-link :class="styleLink" to="/activity" >Activity</router-link></li>
        <li><router-link :class="styleLink" to="/">Calendar</router-link></li>
        <li><router-link :class="styleLink" to="/">Files</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      titleName: 'Website Redesign',
      styleLink: 'link',
    }
  },
}
</script>
