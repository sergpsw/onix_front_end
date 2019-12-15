<template lang="pug">
  .container-tasks
    ul.box-block-style
      li(v-for="(task, index) in allTasks"
        :key="index")
        .container-tasks-left
          h4 {{ task.title }}
          p {{ task.text }}
        .container-tasks-right
          span {{ task.time }}
          button.deleteBtn(
            @click="deleteTask(index)")
    h2 Create task
    form.container-tasks-form(
      @submit.prevent="submit")
      input#title(
        type="text"
        placeholder="Title task"
        v-model="title")
      label(for="title")
      textarea#text(
        placeholder="Text task"
        v-model="text")
      label(for="text")
      button(
        type="submit") Add task
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITask } from '@/types/tasks';

@Component({
  name: 'ContentTasks',
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    },
  },
})
export default class ContentTasks extends Vue {
  title: string = '';

  text: string = '';

  submit(): void {
    const newTask = {
      id: '',
      title: this.title,
      text: this.text,
      time: '',
    };
    if (this.title && this.text) {
      this.$store.dispatch('createTask', newTask);
      this.title = '';
      this.text = '';
    }
  }

  deleteTask(index: number): void {
    this.$store.dispatch('deleteTask', index);
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
        }
        p {
          align-self: center;
          max-width: 350px;
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
          span {
            font-size: 0.65rem;
          }
        }
      }
    }
  }
}
</style>
