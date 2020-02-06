<template lang="pug">
  .container-calendar-popup
    .popup
      span(
      @click="$emit('closePopup')") Show popup
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Popup',
})

export default class ModalDetailsTasks extends Vue {
}
</script>


<style scoped lang="less">
  .container-calendar-popup {
    display: flex;
    justify-content: center;
    align-items: center;
    .popup {
      position: relative;
      display: inline-block;
    }
    span {
      position: absolute;
    }
}
</style>
