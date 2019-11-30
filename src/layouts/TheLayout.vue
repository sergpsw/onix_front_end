<template lang="pug">
  .wrapper
    button.btnSidebar.btnShowBlock(@click="displayBlock")
    MainSidebar
    .wrap-flex-c
      MainHeader
      MainContent
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
