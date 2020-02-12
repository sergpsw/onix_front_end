<template lang="pug">
  .container-kanban
    .container-kanban-filter
      .period
        span Date filter
        input(
          type="date"
          placeholder="Date from..."
          v-model="fromDate")
        input(
          type="date"
          placeholder="Date to..."
          v-model="toDate")
      .search
        span Search
        input(
          v-model="titleFilter"
          placeholder="Enter name task"
          type="search")
        button.btn-clear(
          @click="clearFilter") Clear all filters
    .container-kanban-tabl
      ul
        li.head(
          @click="statusFilter = 'todo'") To Do
          .countStatus(
            v-if='taskTodo.length > 0') {{ taskTodo.length }}
        Draggable(
          :id="'todo'"
          group="cell"
          :list="taskTodo"
          :move="moveOn"
          @add="addBlockTask")
          li.body(
            v-for="(task, index) in filteredTasks"
            :key="task.id"
            v-if="task.status === 'todo'"
            :class="'todo'")
            .div
            span(
              @click="activeModalDetails(task.id)") {{ task.title | snippetText8 }}
            span {{ task.dateTime | formatDate }}
      ul
        li.head(
          @click="statusFilter = 'inprogress'") In Progress
          .countStatus(
            v-if='taskInprogress.length > 0') {{ taskInprogress.length }}
        Draggable(
          :id="'inprogress'"
          group="cell"
          :list="taskInprogress"
          :move="moveOn"
          @add="addBlockTask")
          li.body(
            v-for="(task, index) in filteredTasks"
            :key="index"
            v-if="task.status === 'inprogress'"
            :class="'inprogress'")
            .div
            span(
              @click="activeModalDetails(task.id)") {{ task.title | snippetText8 }}
            span {{ task.dateTime | formatDate }}
      ul
        li.head(
          @click="statusFilter = 'done'") Done
          .countStatus(
            v-if='taskDone.length > 0') {{ taskDone.length }}
        Draggable(
          :id="'done'"
          group="cell"
          :list="taskDone"
          :move="moveOn"
          @add="addBlockTask")
          li.body(
            v-for="(task, index) in filteredTasks"
            :key="index"
            v-if="task.status === 'done'"
            :class="styleStatus")
            .div
            span(
              @click="activeModalDetails(task.id)") {{ task.title | snippetText8 }}
            span {{ task.dateTime | formatDate }}
      ModalDetailsTasks(
        v-show="isModalDetails"
        @closeModal="isModalDetails = false"
        :detailsTask="detailsTask")
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import mixins from 'vue-class-component';
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';
import ModalDetailsTasks from '@/components/ModalWindows/ModalDetailsTasks.vue';
import { ITask, eStatus } from '@/types/tasks';
import MainMixin from '@/mixins/MainMixin';


@Component({
  name: 'ContentKanban',
  components: {
    ModalDetailsTasks,
    Draggable: draggable,
  },
  computed: {
    ...mapGetters([
      'taskTodo',
      'taskInprogress',
      'taskDone',
    ]),
  },
})

export default class ContentKanban extends mixins(MainMixin) {
  detailsTask: ITask = {} as ITask;

  enumStatus: Object = eStatus;

  isModalDetails: boolean = false;

  styleStatus: string = '';

  statusFilter: string = '';

  titleFilter: string = '';

  fromDate: string = '';

  toDate: string = '';

  currentTask: string = '';

  get filteredTasks(): ITask[] {
    if (this.statusFilter) {
      if (this.statusFilter === 'todo') {
        return this.$store.getters.taskTodo;
      }
      if (this.statusFilter === 'inprogress') {
        return this.$store.getters.taskInprogress;
      }
      if (this.statusFilter === 'done') {
        return this.$store.getters.taskDone;
      }
    }
    if (this.titleFilter) {
      return this.$store.getters.allTasks.filter(
        (task: ITask) => (task.title.toLowerCase().indexOf(this.titleFilter.toLowerCase()) !== -1),
      );
    }
    if (this.fromDate || this.toDate) {
      if (this.fromDate !== '' && this.toDate === '') {
        return this.$store.getters.allTasks.filter(
          (task: ITask) => (task.dateTime >= this.fromDate),
        );
      }
      if (this.fromDate === '' && this.toDate !== '') {
        return this.$store.getters.allTasks.filter(
          (task: ITask) => (task.dateTime <= this.toDate),
        );
      }
      if (this.fromDate !== '' && this.toDate !== '') {
        return this.$store.getters.allTasks.filter(
          (task: ITask) => ((task.dateTime >= this.fromDate)
            && (task.dateTime <= this.toDate)),
        );
      }
    }
    return this.$store.getters.allTasks;
  }

  clearFilter() {
    this.statusFilter = '';
    this.titleFilter = '';
    this.fromDate = '';
    this.toDate = '';
  }

  activeModalDetails(index: number): void {
    this.detailsTask = this.$store.getters.taskById(index);
    this.isModalDetails = true;
  }

  moveOn(e: any) {
    this.currentTask = e.draggedContext.element;
    if (!(e.from.id === 'done' && e.to.id === 'todo')) {
      return true;
    }
    return false;
  }

  addBlockTask(e: any) {
    const task: any = this.currentTask;
    const status: eStatus = e.to.id;
    this.$store.dispatch('updateStatus', { id: task.id, status });
    // eslint-disable-next-line
    console.log(task.id);
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
    display: flex;
    justify-content: center;
    input {
      width: 110px;
      margin-bottom: 0.2rem;
    }
    .period {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.2rem 0.3rem;
      background-color: rgb(230, 227, 214);
      border-radius: 5px;
    }
    .search {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 0.5rem;
      padding: 0.2rem 0.3rem;
      background-color: rgb(230, 227, 214);
      border-radius: 5px;
    }
    .btn-clear {
      margin: 0.3rem 0;
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
      .todo {
        div{
          background-color: rgb(223, 82, 82);
        }
      }
      .inprogress {
        div{
          background-color: rgb(226, 168, 59);
        }
      }
    }
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

@media screen and (max-width:  480px) {
  .container-kanban {
    &-filter {
      flex-direction: column;
      .search {
        margin: 0.5rem 0 0 0;
      }
    }
  }
}
</style>
