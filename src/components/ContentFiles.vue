<template lang="pug">
  .container-files
    h2 Names images in activity
    ul
      li(
        v-for="(img, index) in imgs"
        :key="index") {{ img }}
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  name: 'ContentFiles',
  computed: {
    ...mapGetters([
      'imgs',
    ]),
  },
})

export default class ContentTasks extends Vue {
  message404: string = '404 Not Found';
}
</script>


<style scoped lang="less">
  .container-files {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    height: min-content;
    background-color: #fff;
    border-radius: 5px;
    margin:1rem 0;
    h2 {
      text-decoration: underline;
      font-size: 0.9rem;
      margin-bottom: 0;
    }
    ul {
      width: 90%;
      list-style-type: none;
      padding-right: 2.4rem;
      li {
        display: flex;
        flex-direction: column;
        border-bottom: solid 1px #000;
        background-color:rgb(218, 217, 214);
        border-radius: 5px;
        padding: 0 0.5rem;
        margin-bottom: 0.7rem;
      }
    }
  }
</style>
