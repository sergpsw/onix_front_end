<template lang="pug">
  .container-modaladd
    h3 Create task
    form.container-modaladd-form(
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
        type="submit") Add Task
    hr
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { ITask, eStatus } from '@/types/tasks';

@Component({
  name: 'ContentTasksModalAdd',
  computed: {
    ...mapState([
      'tasks',
    ]),
  },
})

export default class ContentTasksModalAdd extends Vue {
  title: string = '';

  description: string = '';

  submit() {
    const newTask = {
      id: this.$store.state.taskId + 1,
      title: this.title,
      description: this.description,
      date: '10.10.2020',
      status: eStatus.todo,
    };
    if (this.title && this.description) {
      this.$store.dispatch('createTask', newTask);
      this.title = '';
      this.description = '';
      // const blinkDescrip = this.$refs.animBlink as Array<any>;
      // blinkDescrip[0].classList.add('blinking');
      // setTimeout(() => {
      //   blinkDescrip[0].classList.remove('blinking');
      // }, 2000);
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
    background-color: #fff;
    border-radius: 5px;
    padding-bottom: 1rem;
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
    hr {
      width: 80%;
      color: gray;
    }
  }
</style>
