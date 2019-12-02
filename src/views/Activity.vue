<template lang="pug">
  ContentActivity
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentActivity from '@/components/ContentActivity.vue';

@Component({
  components: {
    ContentActivity,
  },
})
export default class Activity extends Vue {}
</script>
