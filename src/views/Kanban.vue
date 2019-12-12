<template lang="pug">
  ContentComingSoon
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentComingSoon from '@/components/ContentComingSoon.vue';

@Component({
  components: {
    ContentComingSoon,
  },
})
export default class Kanban extends Vue {}
</script>
