<template lang="pug">
  ContentTasks
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentTasks from '@/components/ContentTasks.vue';

@Component({
  components: {
    ContentTasks,
  },
})
export default class Tasks extends Vue {}
</script>
