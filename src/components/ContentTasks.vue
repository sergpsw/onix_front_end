<template lang="pug">
  .container-tasks
    h2(
      @click="activeModalAdd") {{ headerAddTask }}
    ModalAddTasks(
      v-show="isModalAdd"
      @closeModalAdd="activeModalAdd")
    ModalDetailsTasks(
      v-show="isModalDetails"
      @closeModal="isModalDetails = false"
      :detailsTask="detailsTask"
      :task.id="taskid")
    ul.box-block-style
      transition-group(name="taskBlock")
        li(
          v-for="(task, index) in allTasks"
          :key="task.id")
          .container-tasks-head
            h4(
              ref='animZoom'
              @click="activeModalDetails(task.id)") {{ task.title }}
            button.deleteBtn(
              @click="deleteTask(index)")
          .container-tasks-body
            p(
              @click="activeModalDetails(task.id)") {{ task.description | snippetText32 }}
          .container-tasks-footer
            span {{ task.status }}
            input.date(
              type="date"
              v-model="task.dateTime"
              @input="changeDate(task)"
              placeholder="Date of completion")
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import mixins from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';
import { ITask, eStatus } from '@/types/tasks';
import ModalAddTasks from '@/components/ModalWindows/ModalAddTasks.vue';
import ModalDetailsTasks from '@/components/ModalWindows/ModalDetailsTasks.vue';
import MainMixin from '@/mixins/MainMixin';


@Component({
  name: 'ContentTasks',
  components: {
    ModalAddTasks,
    ModalDetailsTasks,
  },
  computed: {
    ...mapState([
      'tasks',
    ]),
    ...mapGetters([
      'allTasks',
    ]),
  },
})
export default class ContentTasks extends mixins(MainMixin) {
  detailsTask: ITask = {} as ITask;

  isModalDetails: boolean = false;

  isModalAdd: boolean = false;

  taskid: number = 0;

  headerAddTask: string = '+ Add New Task';

  deleteTask(index: number): void {
    this.$store.dispatch('deleteTask', index);
  }

  activeModalDetails(index: number): void {
    this.detailsTask = this.$store.getters.taskById(index);
    this.isModalDetails = true;
  }

  activeModalAdd(): void {
    this.isModalAdd = !this.isModalAdd;
    if (this.isModalAdd) {
      this.headerAddTask = '';
    } else {
      this.headerAddTask = '+ Add New Task';
    }
  }

  changeDate(el: any) {
    this.$store.dispatch('updateDateTime', { id: el.id, dateTime: el.dateTime });
  }

  animatLoadTask() {
    const zoomTitle = this.$refs.animZoom as Array<any>;
    for (let i = 0; i < zoomTitle.length; i += 1) {
      setTimeout(() => {
        zoomTitle[i].classList.add('zooming');
      }, 500 * i);
    }
  }

  mounted() {
    this.animatLoadTask();
  }
}
</script>


<style scoped lang="less">
  .container-tasks {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    height: min-content;
    background-color: #fff;
    border-radius: 5px;
    margin: 1.8rem 0 1rem 0;
    padding-bottom: 1rem;
    h2 {
      align-self: flex-end;
      text-decoration: underline;
      font-size: 0.9rem;
      margin-bottom: 0;
      margin-right: 1.8rem;
      cursor: pointer;
    }
    ul {
      width: 90%;
      list-style-type: none;
      padding-right: 2.4rem;
      li {
        display: flex;
        flex-direction: column;
        border-bottom: solid 1px #000;
        background-color:rgb(218, 217, 214);
        border-radius: 5px;
        padding: 0 0.5rem;
        margin-bottom: 0.7rem;
        .container-tasks-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          h4 {
            font-size: 0.95rem;
            cursor: pointer;
            margin: .2rem 0 0 0;
          }
          button {
            margin: -0.2rem -0.6rem 0 0;
            cursor: pointer;
          }
        }
        .container-tasks-body {
          p {
            max-width: 350px;
            max-height: 80px;
            overflow: auto;
            margin-left: 1.2rem;
            font-size: 0.95rem;
            cursor: pointer;
          }
        }
        .container-tasks-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          margin: 0 0.5rem 0.7rem 0;
          span {
            font-weight: bolder;
            text-decoration: underline;
          }
          .date {
            margin-left: .5rem;
          }
        }
      }
    }
    .zooming {
      animation-name: font-size140;
      animation-duration: 1s;
    }
    .taskBlock-enter-active {
      animation-name: opacity0;
      animation-duration: 1s;
      animation-iteration-count: 3;
    }
    @keyframes opacity0 {
      0% {opacity: 0;}
      50% {opacity: 1;}
      100% {opacity: 0;}
    }
    @keyframes font-size140 {
      50% {font-size: 140%;}
    }
  }

  @media screen and (max-width: 480px) {
    .container-tasks {
      min-width: 200px;
      h2 {
        font-size: 0.7rem;
      }
      .formCreateDeactive {
        margin-right: 1.5rem;
      }
      .formCreateActive {
        margin-right: 1.1rem;
      }
      ul {
        li {
          .container-tasks-head {
            h4 {
              font-size: 0.8rem;
            }
          }
          .container-tasks-body {
            p {
              font-size: 0.7rem;
            }
          }
          .container-tasks-footer {
            span {
              font-size: .7rem;
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
  }
</style>
