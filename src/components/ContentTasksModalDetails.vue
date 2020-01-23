<template lang="pug">
  transition(name="modal")
    .container-modal-mask
       .modal-wrapper
          .modal-container
            header.modal-header
              slot(
                name="header")
                h3 Details task
            section.modal-body
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
            footer.modal-footer
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
  .container-modal-mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    header {
      display: flex;
      justify-content: center;
      h3 {
        margin: 0.5rem 2rem 0.5rem 0;
      }
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
        margin: 0.2rem 0 0.2rem 2.5rem;
      }
    }
    .modal-mask {
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;
    }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
