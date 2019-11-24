<template>
  <content-activity 
    @imgClick="imageSelect" :indexImg="index"
  />
</template>


<script>
import ContentActivity from '@/components/ContentActivity.vue'

export default {
  data() {
    return {
      countImg: 3
    }
  },
  methods: {
    imageSelect(indexImg) {
      this.countImg = indexImg;
    },
  },
  components: {
    ContentActivity
  }
}
</script>