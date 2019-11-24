<template>
  <div>
    <div class="container"> 
      <router-view/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Content'
}
</script>


<style>
.container {
  display: flex;;
  width: 100%;
  height: min-content;
  justify-content: center;
  background-color: rgb(241, 238, 232);
  padding: 0 0.8rem;
}
</style>