<template>
  <div class="wrapper">
    <button class="btnSidebar btnShowBlock"
      @click="displayBlock">
    </button>
    <MainSidebar />
    <div class="wrap-flex-c">
      <MainHeader/>
      <MainContent />
    </div>
  </div>
</template>


<script>
import MainSidebar from '@/components/MainSidebar.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainContent from '@/components/MainContent.vue';

export default {
  methods: {
    displayBlock() {
      document.querySelector('.sidebar').style.display = 'block';
    },
  },
  components: {
    MainSidebar,
    MainHeader,
    MainContent,
  },
};
</script>
