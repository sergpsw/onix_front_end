import axiosApi from './api'
// import { ITask } from '@/types/tasks';

export default {
  // createTask: (el: ITask) =>  axiosApi.post(/task/ + 'create', el),

  // deleteTask: (id: number) =>  axiosApi.delete(/task/ + id + '/delete'),
  
  // editedTask: (id: number, el: any) =>  axiosApi.put(/task/ + id + '/edit', el),
  
  // updateDateTime: (id: number, el: any) =>  axiosApi.put(/task/ + id + '/put', el),
  
  // updateStatus: (id: number, el: any) =>  axiosApi.put(/task/ + id + '/put', el),
  
  allTasks: () => axiosApi.get('/tasks'),
}
