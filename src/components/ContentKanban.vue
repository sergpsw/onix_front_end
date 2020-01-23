<template lang="pug">
  .container-tabl
    ul
      li.head To Do
      li.block-todo(
        v-for="(task, index) in allTasks"
        :key="index")
        span(
          v-if="task.status === 'todo'") {{ task.title }} - {{ task.date }}
        p.ellipsis(
          @click="activeModalDetails(index)") ...
    ul
      li.head In Progress
      li.block-inprogress(
        v-for="(task, index) in allTasks"
        :key="index")
        span(v-if="task.status === 'in progress'") {{ task.title }} - {{ task.date }}
        p.ellipsis(
          @click="activeModalDetails(index)") ...
    ul
      li.head Done
      li.block-done(
        v-for="(task, index) in allTasks"
        :key="index")
        span(
          v-if="task.status === 'done'") {{ task.title }} - {{ task.date }}
        p.ellipsis(
          @click="activeModalDetails(index)") ...
    ContentTasksModalDetails(
      v-show="isModalDetails"
      @closeModal="isModalDetails = false"
      :detailsTask="detailsTask")
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { ITask, eStatus } from '@/types/tasks';
import ContentTasksModalDetails from '@/components/ContentTasksModalDetails.vue';


@Component({
  name: 'ContentKanban',
  components: {
    ContentTasksModalDetails,
  },
  computed: {
    ...mapState([
      'tasks',
    ]),
    allTasks() {
      return this.$store.getters.allTasks;
    },
  },
})

export default class ContentKanban extends Vue {
  @Prop() detailsTask!: ITask;

  isModalDetails = this.$store.state.isModalDetails;

  activeModalDetails(index: number): void {
    this.detailsTask = this.$store.getters.taskById(index);
    this.isModalDetails = true;
  }
}
</script>


<style scoped lang="less">
  .container-tabl {
    background-color: #fff;
    display: flex;
    justify-content: center;
    height: min-content;
    border-radius: 5px;
    margin: 1.5rem 0;
    padding: 0 .8rem;
    ul {
      width: 250px;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      border: solid 1px black;
      padding: 0;
      li {
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .2rem 0;
      }
      .head {
        display: flex;
        justify-content: center;
        font-size: 1rem;
        text-decoration: underline;
      }
      .block-todo {
        color: red;
      }
      .block-inprogress {
        color: orange;
      }
      .block-done {
        color: green;
      }
      .ellipsis {
        font-size: 1.2rem;
        margin: 0 0 0.5rem 0.5rem;
      }
    }
    ul:nth-child(1), ul:nth-child(2) {
      border-right: none;
    }
  }
</style>
