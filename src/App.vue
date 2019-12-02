<template lang="pug">
  div#app
    TheLayout
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheLayout from '@/layouts/TheLayout.vue';

@Component({
  components: {
    TheLayout,
  },
})
export default class App extends Vue {}
</script>


<style lang="less">
@import 'assets/less/main.less';
@import 'assets/less/media.less';
@import 'assets/normalize.css';
</style>
