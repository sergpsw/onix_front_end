<template>
  <div id="app">
    <div class="wrapper">
      <button class="btnSidebar btnShowBlock" 
        @click="displayBlock">
      </button>
      <Sidebar />
      <div class="wrap-flex-c">
        <Header/>
        <Content />
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default {
  methods: {
    displayBlock () {
      document.querySelector(".sidebar").style.display = "block";
    },
  },
  components: {
    Sidebar,
    Header,
    Content
  }
}
</script>


<style lang="less">
@import 'assets/less/main.less';
@import 'assets/less/media.less';
@import 'assets/normalize.css';
</style>
