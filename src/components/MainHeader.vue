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
        router-link(to="/kanban" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']") Kanban
        router-link(to="/activity" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']") Activity
        router-link(to="/calendar" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']") Calendar
        router-link(to="/files" v-slot="{ href, route, navigate, isActive, isExactActive }")
          li
            a(:href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']") Files
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'MainHeader',
})

export default class MainHeader extends Vue {
  titleName: string = 'Website Redesign';

  styleLink: string = 'link';

  fotoUser1: string = 'Olga.jpg';

  fotoUser2: string = 'Robert.jpg';

  fotoUser3: string = 'Chris.jpg';
}
</script>
