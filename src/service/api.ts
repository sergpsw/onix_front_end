import axios from 'axios'

const axiosApi = axios.create({
  baseURL: 'https://vue-apitest.getsandbox.com/',
});

export default axiosApi
