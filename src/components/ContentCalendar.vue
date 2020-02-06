<template lang="pug">
  .container-calendar
    ul
      li(
        v-for="(task, idx) in allTasks"
        :key="idx")
        span(@click="testClick") <!-- {{ task.dateTime }} -->
          Popup(
            v-show="isModalPopup"
            @closePopup="isModalPopup = false")
    .div
      Datepicker(
        v-model="date")
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';
import { mapGetters } from 'vuex';
import Popup from '@/components/ModalWindows/ModalPopupCalendar.vue';

@Component({
  name: 'ContentCalendar',
  components: {
    Datepicker,
    Popup,
  },
  computed: {
    ...mapGetters([
      'allTasks',
    ]),
  },
})

export default class ContentCalendar extends Vue {
  date: any = new Date();

  dateTime: any = this.$store.getters.taskByDate;

  isModalPopup: boolean = false;

  testClick() {
    this.isModalPopup = !this.isModalPopup;
    // eslint-disable-next-line
    console.log(this.dateTime);
  }
}
</script>


<style scoped lang="less">
  .container-calendar {
    display: flex;
    padding-top: 2rem;
    margin-left: -10rem;
  }
</style>
