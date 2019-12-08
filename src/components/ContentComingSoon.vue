<template lang="pug">
  .container-comingsoon
    h1 {{ message404 }}
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ContentComingSoon',
})

export default class ContentTasks extends Vue {
  message404: string = '404 Not Found';
}
</script>


<style scoped lang="less">
  .container-comingsoon {
    display: flex;
    justify-content: center;
    align-items: center;
      h1 {
        font-size: 3rem;
        opacity: 0.7;
      }
  }
</style>
