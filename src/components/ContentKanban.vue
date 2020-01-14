<template lang="pug">
  .container-tabl
    ul
      li.head To Do
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        v-if="task.status === 'todo'") {{ task.title }} - {{ task.date }}
    ul
      li.head In Progress
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        v-if="task.status === 'in progress'") {{ task.title }} - {{ task.date }}
    ul
      li.head Done
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        v-if="task.status === 'done'") {{ task.title }} - {{ task.date }}
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITask, eStatus } from '@/types/tasks';

const tasksDef: ITask[] = [
  {
    title: 'Task4', description: 'Buy vegetables', status: eStatus.inprogress, date: '4.12.19',
  },
  {
    title: 'Task3', description: 'Buy oil', status: eStatus.inprogress, date: '8.12.19',
  },
  {
    title: 'Task2', description: 'Buy bread', status: eStatus.done, date: '16.12.19',
  },
  {
    title: 'Task1', description: 'Buy water', status: eStatus.done, date: '3.12.19',
  },
];

@Component({
  name: 'ContentKanban',
  computed: {
    allTasks() {
      return this.$store.getters.allTasks.concat(tasksDef);
    },
  },
})

export default class ContentTasks extends Vue {}
</script>


<style scoped lang="less">
  .container-tabl {
    display: flex;
    justify-content: center;
    height: min-content;
    ul {
      width: 100px;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      border: solid 1px #000;
      padding: 0;
      li {
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: solid 1px #000;
        padding: .2rem 0;
      }
      li:last-child {
        border-bottom: none;
      }
      .head {
        display: flex;
        justify-content: center;
        font-size: 1rem;
      }
    }
    ul:nth-child(1), ul:nth-child(2) {
      border-right: none;
    }
  }
</style>
