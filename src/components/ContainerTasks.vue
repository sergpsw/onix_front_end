<template>
  <div class="container-tasks">
    <ul class="box-block-style">
      <li v-for="task in tasks" v-bind:value="task.value">
        <h4>{{ task.value}}.</h4>
        <p>{{task.text}} - </p>
        <span> {{task.time}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { value: 'Task1', text: 'Buy water', time: '2.12.19' },
        { value: 'Task2', text: 'Buy bread', time: '4.12.19' },
        { value: 'Task3', text: 'Buy oil', time: '8.12.19' },
        { value: 'Task4', text: 'Buy vegetables', time: '16.12.19' },
        { value: 'Task5', text: 'Buy fruits', time: '3.12.19' }
      ],
    }
  }
}
</script>

<style scoped>
</style>