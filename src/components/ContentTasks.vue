<template lang="pug">
  .container-tasks
    h2 Create task
    form.container-tasks-form(
      @submit.prevent="submit")
      input#title(
        type="description"
        placeholder="Title task"
        v-model="title")
      label(for="title")
      textarea#text(
        placeholder="Text task"
        v-model="description")
      label(for="description")
      label(for="status")
      button(
        type="submit") Add task
    ul.box-block-style
      li(
        v-for="(task, index) in allTasks"
        :key="index"
        ref='animBlink')
        .container-tasks-left
          h4(
            ref='animZoom') {{ task.title }}
          p {{ task.description }}
        .container-tasks-right
          span {{ task.date }}
          span {{ task.status }}
          button.deleteBtn(
            @click="deleteTask(index)")
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { ITask, eStatus } from '@/types/tasks';

const tasksDef: ITask[] = [
  {
    title: 'Task4', description: 'Buy vegetables', status: eStatus.todo, date: '4.12.19',
  },
  {
    title: 'Task3', description: 'Buy oil', status: eStatus.todo, date: '8.12.19',
  },
  {
    title: 'Task2', description: 'Buy bread', status: eStatus.todo, date: '16.12.19',
  },
  {
    title: 'Task1', description: 'Buy water', status: eStatus.todo, date: '3.12.19',
  },
];

@Component({
  name: 'ContentTasks',
  computed: {
    allTasks() {
      return this.$store.getters.allTasks.concat(tasksDef);
    },
    ...mapState([
      'tasks',
    ]),
  },
})
export default class ContentTasks extends Vue {
  title: string = '';

  description: string = '';

  submit(): void {
    const newTask = {
      id: '',
      title: this.title,
      description: this.description,
      date: '10.10.2020',
      status: eStatus.todo,
    };
    if (this.title && this.description) {
      this.$store.dispatch('createTask', newTask);
      this.title = '';
      this.description = '';
      const blinkDescrip = this.$refs.animBlink as Array<any>;
      blinkDescrip[0].classList.add('blinking');
      setTimeout(() => {
        blinkDescrip[0].classList.remove('blinking');
      }, 2000);
    }
  }

  deleteTask(index: number): void {
    this.$store.dispatch('deleteTask', index);
  }

  mounted():void {
    const zoomTitle = this.$refs.animZoom as Array<any>;
    for (let i = 0; i < zoomTitle.length; i += 1) {
      setTimeout(() => {
        zoomTitle[i].classList.add('zooming');
      }, 500 * i);
    }
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
          &:hover {
            font-size: 140%;
            transition: all 1s;
          }
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
        justify-self: flex-end;
        align-items: center;
        span {
          font-size: 0.8rem;
          margin: 0 0.5rem;
        }
        button {
          margin: 0 0.5rem;
        }
      }
    }
  }
  h2 {
    margin-bottom: 0.3rem;
  }
  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    input {
      width: 90%;
    }
    textarea {
      width: 90%;
      max-height: 100px;
      margin: 0.3rem 0;
    }
    button {
      background-color: #FFC200;
      border-radius: 5px;
      border: none;
      padding: 0.5rem;
      font-size: 0.7rem;
      text-transform: uppercase;
      cursor: pointer;
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
