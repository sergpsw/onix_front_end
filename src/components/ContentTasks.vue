<template lang="pug">
  .container-tasks
    router-view
    ul.box-block-styl
      li(v-for="task in tasks"
        :key="task.title")
        h4 {{ task.title }}.
        p {{ task.text }} -
        span {{  task.time }}
</template>


<script>
export default {
  name: 'ContentTasks',
  data() {
    return {
      tasks: [
        { title: 'Task1', text: 'Buy water', time: '2.12.19' },
        { title: 'Task2', text: 'Buy bread', time: '4.12.19' },
        { title: 'Task3', text: 'Buy oil', time: '8.12.19' },
        { title: 'Task4', text: 'Buy vegetables', time: '16.12.19' },
        { title: 'Task5', text: 'Buy fruits', time: '3.12.19' },
      ],
    };
  },
};
</script>


<style scoped lang="less">
.container-tasks {
  display: flex;
  flex-direction: column;
  width: max-content;
  height: min-content;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  margin: 1.8rem 0 1rem 0;
  padding-bottom: 1rem;
  ul {
    list-style-type: none;
    padding-right: 1.5rem;
    li {
      display: flex;
      border-bottom: solid 1px #000;
      h4 {
        font-size: 0.95rem;
      }
      p {
        align-self: center;
        width: 80%;
        margin-left: 1.2rem;
        font-size: 0.95rem;
      }
      span {
        align-self: center;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
