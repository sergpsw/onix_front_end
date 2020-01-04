<template lang="pug">
  ContentKanban
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentKanban from '@/components/ContentKanban.vue';

@Component({
  components: {
    ContentKanban,
  },
})
export default class Kanban extends Vue {}
</script>
