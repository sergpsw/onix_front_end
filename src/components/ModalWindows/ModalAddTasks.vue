<template lang="pug">
  .container-modaladd
    button.btn-close(
      @click="$emit('closeModalAdd')")
    h3 Create task
    form.container-modaladd-form(
      @submit.prevent="submit")
      input#title(
        type="description"
        placeholder="Title task"
        maxlength="32"
        v-model="title")
      label(for="title")
      textarea#text(
        placeholder="Text task"
        maxlength="768"
        v-model="description")
      label(for="description")
      label(for="status")
      input#date(
        type="date"
        placeholder="Date"
        v-model="dateTime")
      button(
        type="submit") Add Task
    hr
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITask, eStatus } from '@/types/tasks';

@Component({
  name: 'ModalAddTasks',
})

export default class ModalAddTasks extends Vue {
  title: string = '';

  description: string = '';

  dateTime: string = '';

  submit() {
    const newTask = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      dateTime: this.dateTime,
      status: eStatus.todo,
    };
    if (this.title && this.description) {
      this.$store.dispatch('createTask', newTask);
      this.title = '';
      this.description = '';
      this.dateTime = '';
      this.$emit('animatAddTask');
    }
  }
}
</script>


<style scoped lang="less">
  .container-modaladd {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    height: min-content;
    background-color:rgb(214, 209, 209);
    border-radius: 5px;
    margin: 0 0.5rem;
    .btn-close {
      align-self: flex-end;
      padding: 0.5rem;
      background-color: red;
      background-image: url('~@/assets/img/close1.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 55%;
      border-radius: 50%;
      text-decoration: none;
      border: none;
      margin: -0.3rem -.1rem 0 0;
      z-index: 20;
    }
    h3 {
      margin: 0;
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
      #date {
        width: 105px;
      }
      button {
        background-color: #FFC200;
        border-radius: 5px;
        border: none;
        padding: 0.5rem;
        margin-top: 0.3rem;
        font-size: 0.7rem;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    hr {
      width: 80%;
      color: gray;
    }
  }
</style>
