<template lang="pug">
  .container-tasks
    h2(
      @click="activeModalAdd"
      :class="headingCreateForm") {{ headerAddTask }}
    ContentTasksModalAdd(
      :$refs.animBlink="animBlink"
      v-show="isModalAdd")
    ContentTasksModalDetails(
      v-show="isModalDetails"
      @closeModal="isModalDetails = false"
      :detailsTask="detailsTask")
    ul.box-block-style
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        ref='animBlink')
        .container-tasks-left
          h4(
            ref='animZoom') {{ task.title }}
          p(
            @click="activeModalDetails(index)") {{ task.description }}
        .container-tasks-right
          span {{ task.date }}
          .div
            select
              option(
                v-if="task.status === 'todo'") {{ enumStatus.todo }}
              option(
                v-if="task.status === 'in progress'") {{ enumStatus.inprogress }}
              option(
                v-if="task.status === 'done'") {{ enumStatus.done }}
            button.deleteBtn(
              @click="deleteTask(index)")
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { ITask, eStatus } from '@/types/tasks';
import ContentTasksModalAdd from '@/components/ContentTasksModalAdd.vue';
import ContentTasksModalDetails from '@/components/ContentTasksModalDetails.vue';


@Component({
  name: 'ContentTasks',
  components: {
    ContentTasksModalAdd,
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
export default class ContentTasks extends Vue {
  @Prop() detailsTask!: ITask;// error

  enumStatus: Object = eStatus;

  isModalDetails = this.$store.state.isModalDetails;

  isModalAdd: boolean = false;

  headerAddTask: string = '+ Add task';

  headingCreateForm: string = 'formCreateDeactive';

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
      this.headingCreateForm = 'formCreateActive';
    } else {
      this.headerAddTask = '+ Add task';
      this.headingCreateForm = 'formCreateDeactive';
    }
  }

  animatAddTask() {
    const blinkDescrip = this.$refs.animBlink as Array<any>;
    blinkDescrip[0].classList.add('blinking');
    setTimeout(() => {
      blinkDescrip[0].classList.remove('blinking');
    }, 2000);
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
    // this.animatAddTask();
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
  h3 {
    align-self: flex-start;
    text-decoration: underline;
    margin: -1.2rem 0 0 2.3rem;
  }
  h2 {
    align-self: flex-end;
    text-decoration: underline;
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  .formCreateDeactive {
    margin-right: 1.8rem;
  }
  .formCreateActive {
    padding: 0.5rem;
    background-color: red;
    background-image: url('../assets/img/close1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 55%;
    border-radius: 50%;
    text-decoration: none;
    margin: 1rem 4.4rem -1.1rem 0;
    z-index: 20;
  }
  ul {
    list-style-type: none;
    padding-right: 1.5rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: solid 1px #000;
      .container-tasks-left {
        display: flex;
        justify-self: flex-start;
        flex-wrap: wrap;
        width: 85%;
        h4 {
          font-size: 0.95rem;
        }
        p {
          align-self: center;
          max-width: 350px;
          max-height: 80px;
          max-height: 80px;
          overflow: auto;
          margin-left: 1.2rem;
          font-size: 0.95rem;
        }
      }
      .container-tasks-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          font-size: 0.8rem;
          margin: 0 0.5rem;
        }
        div {
          display: flex;
          align-items: center;
          select {
            width: 5rem;
          }
          button {
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
  .blinking {
    animation-name: opacity0;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }
  .zooming {
    animation-name: font-size140;
    animation-duration: 1s;
  }
}
@keyframes opacity0 {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
}
@keyframes font-size140 {
  50% {font-size: 140%;}
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
        .container-tasks-right {
          flex-wrap: wrap;
          span {
            margin-right: 3rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .container-tasks {
    min-width: 200px;
    ul {
      li {
        .container-tasks-left {
          width: 90%;
          h4 {
            font-size: 0.7rem;
          }
          p {
            font-size: 0.7rem;
          }
        }
        .container-tasks-right {
          align-self: flex-start;
          margin-top: 1rem;
          span {
            font-size: 0.65rem;
          }
        }
      }
    }
  }
}
</style>
