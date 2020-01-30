<template lang="pug">
  .container-calendar
    Datepicker(
      v-model="date")
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';

@Component({
  name: 'ContentCalendar',
  components: {
    Datepicker,
  },
})

export default class ContentCalendar extends Vue {
  date: any = new Date();
}
</script>


<style scoped lang="less">
  .container-calendar {
    display: flex;
    padding-top: 2rem;
    margin-left: -10rem;
  }
</style>
