<template lang="pug">
  .container-calendar
    .block-month-year
      .btn-month
        button.btn-down(
          @click="monthDown")
        span {{ monthEl  }}
        button.btn-up(
          @click="monthUp")
      select(
        v-model="yearEl")
        option(
          v-for="year in yearsArr") {{ year }}
    ul
      li.head(
        v-for="day in daysWeek") {{ day }}
    ul
      li(
        v-for="day in daysEmpt")
      li(
        v-for="day in calnArr") {{ day.date }}
        .task-block(
          v-for="task in day.tasks"
          :key="task.id",
          @click="activeModalDetails(task.id)") {{ task.title | snippetText8 }}
    ModalDetailsTasks(
      v-show="isModalDetails"
      @closeModal="isModalDetails = false;"
      :detailsTask="detailsTask"
      :task.id="taskid")
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import mixins from 'vue-class-component';
import moment from 'moment';
import { ITask } from '@/types/tasks';
import ModalDetailsTasks from '@/components/ModalWindows/ModalDetailsTasks.vue';
import MainMixin from '@/mixins/MainMixin';

@Component({
  name: 'ContentCalendar',
  components: {
    ModalDetailsTasks,
  },
})

export default class ContentCalendar extends mixins(MainMixin) {
  detailsTask: ITask = {} as ITask;

  daysWeek: string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  monthArr: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  monthEl: string = moment().format('MMMM').toString();

  daysEmpt: any[] = [];

  calnArr: any[] = [];

  yearsArr: number[] = [];

  yearEl: number = parseInt(moment().format('YYYY'), 10);

  isModalDetails: boolean = false;

  taskid: number = 0;

  get tasks(): ITask[] {
    return this.$store.getters.allTasks;
  }

  monthUp() {
    let monthYear = moment(`${this.monthEl}${this.yearEl}`, 'MMMMYYYY');
    monthYear = monthYear.add(1, 'month');
    this.monthEl = monthYear.format('MMMM');
    this.yearEl = parseInt(monthYear.format('YYYY'), 10);
  }

  monthDown() {
    let monthYear = moment(`${this.monthEl}${this.yearEl}`, 'MMMMYYYY');
    monthYear = monthYear.add(-1, 'month');
    this.monthEl = monthYear.format('MMMM');
    this.yearEl = parseInt(monthYear.format('YYYY'), 10);
  }

  createCaln() {
    this.calnArr = [];
    this.daysEmpt = [];
    let day = parseInt(moment(`${this.monthEl}${this.yearEl}`, 'MMMMYYYY').format('E'), 10);
    const daysInMonth = moment(`${this.yearEl}${this.monthEl}`, 'YYYYMMMM').daysInMonth();
    const monthYear = moment(`${this.monthEl}${this.yearEl}`, 'MMMMYYYY').format('MMYYYY');
    while (day > 0) {
      this.daysEmpt.push(0);
      day -= 1;
    }
    for (let i = 1; i <= daysInMonth; i += 1) {
      const calnDate = {
        date: i,
        tasks: [],
      };
      this.calnArr.push(calnDate);
    }
    for (let i = 0; i < this.tasks.length; i += 1) {
      const taskDate = moment(this.tasks[i].dateTime, this.$store.getters.format).format('MMYYYY');
      if (Object.is(taskDate, monthYear)) {
        const date = parseInt(moment(this.tasks[i].dateTime, this.$store.getters.format).format('D'), 10);
        this.calnArr[date - 1].tasks.push(this.tasks[i]);
      }
    }
  }

  activeModalDetails(index: number): void {
    this.detailsTask = this.$store.getters.taskById(index);
    this.isModalDetails = true;
  }

  @Watch('monthEl')
  changeMonth() {
    this.createCaln();
  }

  @Watch('yearEl')
  changeYear() {
    this.createCaln();
  }

  created() {
    let i: number;
    for (i = 2019; i <= 2025; i += 1) {
      this.yearsArr.push(i);
    }
    this.createCaln();
  }
}
</script>

<style scoped lang="less">
  .container-calendar {
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    background-color:rgb(240, 231, 231);
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 1rem;
    .block-month-year {
      display: flex;
      margin: 0 0 0.4rem 0.5rem;
      .btn-month {
        display: flex;
        span {
          display: flex;
          justify-content: center;
          width: 2.5rem;
          font-size: 0.9rem;
          width: 4.2rem;
        }
        .btn-up {
          padding: 0.5rem;
          background-image: url('~@/assets/img/up.png');
          background-repeat: no-repeat;
          background-position: center;
          background-size: 75%;
          border-radius: 5px;
          margin-right: 0.5rem;
        }
        .btn-down {
          padding: 0.5rem;
          background-image: url('~@/assets/img/down.png');
          background-repeat: no-repeat;
          background-position: center;
          background-size: 75%;
          border-radius: 5px;
        }
      }
    }
    ul {
    width: 24.5rem;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    background-color:rgb(214, 209, 209);
    border-radius: 5px;
    padding: 0.1rem 0.1rem 0.2rem 0.1rem;
    margin: 0 0.1rem 0 0;
      .head {
        font-size: 0.9rem;
        background-color:rgb(252, 242, 220);
      }
      li {
        width: 2.8rem;
        height: 2.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        background-color:rgb(245, 237, 237);
        border-radius: 5px;
        margin: .15rem .15rem 0 .15rem;
        padding: .2rem;
        .task-block{
          font-size: 0.55rem;
          color:rgb(9, 182, 18);
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width:  480px) {
    .container-calendar {
      ul {
        width: 17.15rem;
        .head {
          font-size: 0.8rem;
        }
        li {
          width: 1.75rem;
          height: 1.75rem;
          font-size: 0.65rem;
          .task-block{
            font-size: 0.4rem;
          }
        }
      }
    }
  }
</style>
