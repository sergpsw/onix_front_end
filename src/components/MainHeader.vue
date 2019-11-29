<template>
  <header class="navbar">
    <div class="navbar-title">
      <div class="navbar-title-left">
        <span class="navbar-title-left-text">{{ titleName }}</span>
        <button class="navbar-title-left-btn"></button>
      </div>
      <div class="navbar-title-right">
        <div class="navbar-title-right-photo"
          :style="{backgroundImage: 'url(' + require('../assets/img/' + fotoUser1) + ')'}"></div>
        <div class="navbar-title-right-photo"
          :style="{backgroundImage: 'url(' + require('../assets/img/' + fotoUser2) + ')'}"></div>
        <div class="navbar-title-right-photo"
          :style="{backgroundImage: 'url(' + require('../assets/img/' + fotoUser1) + ')'}"></div>
        <button class="navbar-title-right__share">Share</button>
        <button class="navbar-title-right__chat">Chat</button>
      </div>
    </div>
    <nav class="navbar-navigation">
      <ul>
        <router-link
          to="/tasks"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li>
            <a :href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']">
              Tasks
            </a>
          </li>
        </router-link>

        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li>
            <a :href="href" :class="styleLink">Kanban</a>
          </li>
        </router-link>

        <router-link
          to="/activity"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li>
            <a :href="href"
              :class="[styleLink, isActive && 'activeLink', isExactActive && 'link']">
              Activity
            </a>
          </li>
        </router-link>

        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li>
            <a :href="href" :class="styleLink">Calendar</a>
          </li>
        </router-link>

        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li>
            <a :href="href" :class="styleLink">Files</a>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
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
