<template lang="pug">
  ContentFiles
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentFiles from '@/components/ContentFiles.vue';

@Component({
  components: {
    ContentFiles,
  },
})
export default class Files extends Vue {}
</script>
