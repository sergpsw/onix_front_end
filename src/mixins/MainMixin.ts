import { Component, Vue } from 'vue-property-decorator';
import * as moment from 'moment';
import { ITask } from '@/types/tasks';

@Component({
  filters: {
    formatDate(date: number): string {
      return moment.utc(date).format('DD-MM-YYYY');
    },
    snippetText8(value: string): string {
      return `${value.slice(0, 8)}...`;
    },
    snippetText32(value: string): string {
      return `${value.slice(0, 32)}...`;
    },
  },
})
export default class MainMixin extends Vue {
  detailsTask: ITask = {} as ITask;

  isModalDetails = this.$store.state.isModalDetails;

  activeModalDetails(index: number): void {
    this.detailsTask = this.$store.getters.taskById(index);
    this.isModalDetails = true;
  }
}
