<template lang="pug">
  .container
    router-view
</template>


<script>
export default {
  name: 'MainContent',
};
</script>


<style lang="less">
.container {
  display: flex;
  flex: 1 0 auto;
  align-content: stretch;
  width: 100%;
  justify-content: center;
  background-color: rgb(241, 238, 232);
  padding: 0 0.8rem;
}
</style>
