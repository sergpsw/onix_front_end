<template lang="pug">
  ContentCalendar
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentCalendar from '@/components/ContentCalendar.vue';

@Component({
  components: {
    ContentCalendar,
  },
})
export default class Calendar extends Vue {}
</script>
