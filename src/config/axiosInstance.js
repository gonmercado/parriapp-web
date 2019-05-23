import axios from 'axios';

let axiosInstance;

export const getAxiosInstance = () => {
  axiosInstance = axiosInstance || axios.create({
    baseURL: '/api',
    headers: {'TT-AP': '17c2f06fcc85a2c7807e9f2432233a04283aa8a5'}
  });

  return axiosInstance;
}
