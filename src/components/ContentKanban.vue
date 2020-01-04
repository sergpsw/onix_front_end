<template lang="pug">
  .container-tabl
    ul
      li.head {{ todo }}
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        v-if="task.status === 'todo'") {{ task.title }} {{ task.date }}
    ul
      li.head {{ inprogress }}
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        v-if="task.status === 'inprogress'") {{ task.title }} {{ task.date }}
    ul
      li.head {{ done }}
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        v-if="task.status === 'done'") {{ task.title }} {{ task.date }}
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITask, eStatus } from '@/types/tasks';

@Component({
  name: 'ContentKanban',
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    },
  },
})

export default class ContentTasks extends Vue {
  todo: string = 'To Do';

  inprogress: string = 'In Progress';

  done: string = 'Done';
}
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
