<template lang="pug">
  .wrapper
    button.btnShowSidebar.btnShowBlock(@click="onSidebar"
      :style="{backgroundImage:'url('+require('../assets/img/'+imageBtn)+')'}")
    MainSidebar(:style="{display: showDisplay}")
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
  showDisplay: string = '';

  imageBtn: string = 'show.svg';
  
  onSidebar() {
    if (this.showDisplay === 'block') {
      this.showDisplay = 'none';
      this.imageBtn = 'show.svg';
    } else {
      this.showDisplay = 'block';
      this.imageBtn = 'show2.png';
    }
  }
}
</script>
