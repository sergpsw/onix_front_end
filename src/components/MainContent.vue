<template>
  <div class="container">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'Content',
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
