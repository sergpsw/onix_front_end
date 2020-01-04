export interface ITask {
  id?: string | number;
  title: string;
  description: string;
  date?: string;
  status: eStatus,
}

export enum eStatus {// eslint-disable-line import/prefer-default-export
  todo = 'todo',
  inprogress = 'in progress',
  done = 'done',
}
