<template>
  <div id="app">
    <div class="wrapper">
      <button class="btnSidebar btnShowBlock" 
        @click="displayBlock">
      </button>
      <Sidebar />
        <!-- :countImg="countImg" -->
      
      <div class="wrap-flex-c">
        <Header/>
        <Content />
          <!-- @imgClick="imageSelect" :indexImg="index" -->
        
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default {
  // data() {
  //   return {
  //     countImg: 3
  //   }
  // },
  methods: {
    displayBlock () {
      document.querySelector(".sidebar").style.display = "block";
    },
    // imageSelect(indexImg) {
    //   this.countImg = indexImg;
    // },
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
