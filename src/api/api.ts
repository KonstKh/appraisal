import Axios from 'axios';

const apiUrl = 'http://5bf3e5a691c25b0013a3b967.mockapi.io/api/v1';
const axios = Axios.create({
  baseURL: apiUrl
})

export const saveVehicle = (vehicle: any) => {
  return axios.post('/vehicle', vehicle)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw (error);
    });
}