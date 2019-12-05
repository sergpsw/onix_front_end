<template lang="pug">
  .wrapper
    button.btnShowSidebar(@click="showSidebar"
      :style="{backgroundImage:'url('+require('../assets/img/'+imageBtn)+')'}")
    MainSidebar(:style="{display: displayStyle}")
    .wrap-flex-c
      MainHeader
      MainContent
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainSidebar from '@/components/MainSidebar.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainContent from '@/components/MainContent.vue';

@Component({
  components: {
    MainSidebar,
    MainHeader,
    MainContent,
  },
})
export default class TheLayout extends Vue {
  displayStyle: string = '';

  imageBtn: string = 'show.svg';
  
  showSidebar(): void {
    if (this.displayStyle === 'block') {
      this.displayStyle = 'none';
      this.imageBtn = 'show.svg';
    } else {
      this.displayStyle = 'block';
      this.imageBtn = 'show2.png';
    }
  }
}
</script>
