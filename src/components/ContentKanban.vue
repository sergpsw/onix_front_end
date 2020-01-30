<template lang="pug">
  .container-kanban
    .container-kanban-filter
      input(
        v-model="titleFilter"
        placeholder="Enter name task")
      button.btn-clear(
        @click="clearedFilter") Filter clear
    .container-kanban-tabl
      ul
        li.head(
          @click="statusFilter = 'todo'") To Do
          .countStatus {{ taskTodo }}
        Draggable(
          v-model='myList')
          li.body(
            v-for="(task, index) in filteredTasks"
            :key="task.id"
            v-if="task.status === 'todo'"
            :class="styleTodo")
            .div
            span(
              @click="activeModalDetails(task.id)") {{ task.title | snippetText }}
            span {{ task.dateTime | formatDate }}
      ul
        li.head(
          @click="statusFilter = 'in progress'") In Progress
          .countStatus {{ taskInprogress }}
        Draggable(
          v-model='myTasksList')
          li.body(
            v-for="(task, index) in filteredTasks"
            :key="index"
            v-if="task.status === 'in progress'"
            :class="styleInprogress")
            .div
            span(
              @click="activeModalDetails(task.id)") {{ task.title | snippetText }}
            span {{ task.dateTime | formatDate }}
      ul
        li.head(
          @click="statusFilter = 'done'") Done
          .countStatus {{ taskDone }}
        Draggable(
          v-model='myTasksList')
          li.body(
            v-for="(task, index) in filteredTasks"
            :key="index"
            v-if="task.status === 'done'"
            :class="styleDone")
            .div
            span(
              @click="activeModalDetails(task.id)") {{ task.title | snippetText }}
            span {{ task.dateTime | formatDate }}
      ModalDetailsTasks(
        v-show="isModalDetails"
        @closeModal="isModalDetails = false"
        :detailsTask="detailsTask")
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import mixins from 'vue-class-component';
import Datepicker from 'vuejs-datepicker';
import draggable from 'vuedraggable';
import ModalDetailsTasks from '@/components/ModalWindows/ModalDetailsTasks.vue';
import { ITask, eStatus } from '@/types/tasks';
import MainMixin from '@/mixins/';


@Component({
  name: 'ContentKanban',
  components: {
    ModalDetailsTasks,
    Datepicker,
    Draggable: draggable,
  },
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    },
    taskTodo() {
      return this.$store.getters.taskTodo.length;
    },
    taskInprogress() {
      return this.$store.getters.taskInprogress.length;
    },
    taskDone() {
      return this.$store.getters.taskDone.length;
    },
    // myList: {
    //   get() {
    //     return this.$store.state.myList;
    //   },
    //   set(value) {
    //     this.$store.commit('updateList', value);
    //   },
    // },
  },
})

export default class ContentKanban extends mixins(MainMixin) {
  detailsTask: ITask = {} as ITask;

  enumStatus: Object = eStatus;

  isModalDetails: boolean = false;

  styleTodo: string = 'block-todo';

  styleInprogress: string = 'block-inprogress';

  styleDone: string = 'block-done';

  statusFilter: string = '';

  titleFilter: string = '';

  get filteredTasks(): ITask[] {
    const self = this;
    if (this.statusFilter) {
      if (this.statusFilter === 'todo') {
        return this.$store.getters.taskTodo;
      }
      if (this.statusFilter === 'in progress') {
        return this.$store.getters.taskInprogress;
      }
      if (this.statusFilter === 'done') {
        return this.$store.getters.taskDone;
      }
    }
    if (this.titleFilter) {
      return this.$store.getters.allTasks.filter(
        (task: any) => (task.title.toLowerCase().indexOf(this.titleFilter.toLowerCase()) !== -1),
      );
    }
    return this.$store.getters.allTasks;
  }

  clearedFilter() {
    this.statusFilter = '';
    this.titleFilter = '';
  }

  activeModalDetails(index: number): void {
    this.detailsTask = this.$store.getters.taskById(index);
    this.isModalDetails = true;
  }
}
</script>


<style scoped lang="less">
.container-kanban {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  &-filter {
    margin-bottom: .5rem;
    .btn-clear {
      margin-left: 0.8rem;
    }
  }
  &-tabl {
    background-color:rgb(241, 235, 235);
    display: flex;
    justify-content: center;
    height: min-content;
    border-radius: 5px;
    padding: 0 .8rem;
    ul {
      width: 200px;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      background-color:rgb(214, 209, 209);
      border-radius: 5px;
      padding: 0;
      margin-right: 0.5rem;
      li {
        height: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:rgb(236, 227, 227);
        border-radius: 5px;
        margin: .4rem .2rem;
        padding: .2rem;
        // cursor: pointer;
      }
      .body {
        div {
          border-radius: 5px;
          width: 10%;
          height: 10%;
          align-self: flex-start;
        }
      }
      .head {
        flex-direction: row;
        justify-content: center;
        font-size: 1rem;
        background-color:rgb(252, 242, 220);
        .countStatus {
          background-color: rgb(238, 220, 57);
          border-radius: 50%;
          font-size: .7rem;
          margin: 0 0 0.15rem 0.1rem;
          padding: 0 0.3rem;
        }
      }
      span {
        overflow: auto;
        cursor: pointer;
      }
      .block-todo {
        div{
          background-color: rgb(223, 82, 82);
        }
      }
      .block-inprogress {
        div{
          background-color: rgb(226, 168, 59);
        }
      }
      .block-done {
        div{
          background-color:rgb(53, 141, 53);
        }
      }
    }
    // ul:nth-child(3) {
    //   margin-right: 0;
    // }
  }
}

@media screen and (max-width:  768px) {
  .container-kanban {
    &-tabl {
      ul {
        width: 100px;
        li {
          height: 3.5rem;
        }
        .body {
          div {
            width: 17%;
          }
        }
        .head{
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
