<template lang="pug">
  .container-modaldetail
    header
      slot(
        name="header")
        h3 Details task
    section
      slot(
        name="body")
        div
          ul.box-block-style
            li
              h4(v-if="!isChangedTask") {{ detailsTask.title }}
              textarea(v-else v-model="detailsTask.title" @input="editTask")
            li
              p(v-if="!isChangedTask") {{ detailsTask.description }}
              textarea(v-else v-model="detailsTask.description" @input="editTask")
    footer
      slot(
        name="footer")
        button.btn-close(
          type="button"
          @click="editCancel") {{ nameButton }}
        button.btn-save(
          type="button"
          v-show="isButtonSave"
          @click="saveTask") Save

</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ITask, eStatus } from '@/types/tasks';

@Component({
  name: 'ContentTasksModalDetails',
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    },
  },
})

export default class ContentTasksModalDetails extends Vue {
  @Prop() detailsTask!: ITask;

  isEditTask: boolean = false;

  isChangedTask: boolean = false;

  isButtonSave: boolean = false;

  nameButton: string = 'Edit';

  editCancel() {
    if (this.nameButton === 'Edit') {
      this.editTask();
    } else if (this.nameButton === 'Cancel') {
      this.$store.getters.allTasks.title = this.$store.getters.allTasks.title;
      this.$store.getters.allTasks.description = this.$store.getters.allTasks.description;
      this.isEditTask = false;
      this.isChangedTask = false;
      this.isButtonSave = false;
      this.nameButton = 'Edit';
      this.$emit('closeModal');
    }
  }

  editTask(): void {
    if (this.nameButton === 'Edit') {
      this.isChangedTask = true;
      this.isButtonSave = true;
      this.nameButton = 'Cancel';
    } else {
      this.isEditTask = false;
    }
  }

  saveTask(): void {
    this.$store.getters.allTasks.title = this.detailsTask.title;
    this.$store.getters.allTasks.description = this.detailsTask.description;
    this.isEditTask = false;
    this.isChangedTask = false;
    this.isButtonSave = false;
    this.nameButton = 'Edit';
    this.$emit('closeModal');
  }

  close(): void {
    this.$emit('closeModal');
  }
}
</script>


<style scoped lang="less">
  .container-modaldetail {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    height: min-content;
    background-color: #f7f0f0d2;
    border-radius: 5px;
    margin: .5rem 0 0 0;
    padding-bottom: 0.5rem;
    h3 {
      margin: 0.5rem 0;
    }
    section {
      width: 95%;
      ul {
        list-style-type: none;
        padding: 0.1rem;
        margin: 0 .4rem 0 .4rem;
        li {
          display: flex;
          align-items: center;
          h4 {
            font-size: 0.9rem;
            margin: 0 2rem 0 0;
          }
          textarea {
            width: 100%;
          }
        }
      }
    }
    footer {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 65px;
        border-radius: 5px;
        padding: 0.2rem 0;
        font-size: 0.65rem;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: 0.2rem;
      }
      // .btn-save {
      //   margin-left: .5rem;
      // }
      // .btn-close {
      //   margin-right: .5rem;
      // }
    }

  }
</style>
