<template lang="pug">
  header.navbar
    .navbar-title
      .navbar-title-left
        span.navbar-title-left-text {{ titleName }}
        button.navbar-title-left-btn
      .navbar-title-right
        .navbar-title-right-photo(
          :style="{backgroundImage:'url('+require('../assets/img/'+fotoUser1)+')'}")
        .navbar-title-right-photo(
          :style="{backgroundImage:'url('+require('../assets/img/'+fotoUser2)+')'}")
        .navbar-title-right-photo(
          :style="{backgroundImage:'url('+require('../assets/img/'+fotoUser3)+')'}")
        button.navbar-title-right__share Share
        button.navbar-title-right__chat Chat
    nav.navbar-navigation
      ul
        router-link(to="/tasks" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']") Tasks
        router-link(to="/" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="styleLink") Kanban
        router-link(to="/activity" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']") Activity
        router-link(to="/" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="styleLink") Calendar
        router-link(to="/" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="styleLink") Files
</template>


<script>
export default {
  name: 'Header',
  data() {
    return {
      titleName: 'Website Redesign',
      styleLink: 'link',
      fotoUser1: 'Olga.jpg',
      fotoUser2: 'Robert.jpg',
      fotoUser3: 'Chris.jpg',
    };
  },
};
</script>
