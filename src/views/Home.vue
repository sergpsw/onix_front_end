<template>
  <div class="wrapper">
    <button class="btnSidebar btnShowBlock" 
      @click="displayBlock">
    </button>
    <sidebar 
      :countImg="countImg"
    />
    <div class="wrap-flex-c">
      <navbar
        @showTasks="shTasks" 
        @showChat="shChat" 
        :viTasks="shows.view"
      />
      <div class="container"> 
        <container-tasks  
          v-show="shows.viewTasks"/>
        <container-chat 
          v-show="shows.viewChat"
          @imgClick="imageSelect"
          :indexImg="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import ContainerTasks from '@/components/ContainerTasks.vue'
import ContainerChat from '@/components/ContainerChat.vue'

export default {
  name: 'home',
  data() {
    return {
      shows: {
        viewTasks: false,
        viewChat: true
      },
      countImg: 3
    }
  },
  methods: {
    displayBlock () {
      document.querySelector(".sidebar").style.display = "block";
    },
    imageSelect(indexImg) {
      this.countImg = indexImg;
    },
    shTasks(viTasks) {
      this.shows.viewTasks = viTasks;
      this.shows.viewChat = !viTasks;
    },
    shChat(viTasks) {
      this.shows.viewTasks = !viTasks;
      this.shows.viewChat = viTasks;
    }
  },
  components: {
    Sidebar,
    Navbar,
    ContainerTasks,
    ContainerChat
  }
}
</script>


