<template lang="pug">
  div#app
    TheLayout
</template>


<script>
import TheLayout from '@/layouts/TheLayout.vue';

export default {
  components: {
    TheLayout,
  },
};
</script>


<style lang="less">
@import 'assets/less/main.less';
@import 'assets/less/media.less';
@import 'assets/normalize.css';
</style>
