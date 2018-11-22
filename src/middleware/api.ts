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
      throw(error);
    });
}

export const saveTyres = (tyres: any) => {
  return axios.post('/tyres', tyres)
    .then( response => {
      return response.data
    })
    .catch( error => {
      throw(error);
    })
}

export const saveEquipment = (equipement: any) => {
  return axios.post('/equipement', equipement)
    .then( response => {
      return response.data
    })
    .catch( error => {
      throw(error);
    })
}

export const saveInspection = (inspection: any) => {
  return axios.post('/inspection', inspection)
    .then( response => {
      return response.data
    })
    .catch( error => {
      throw(error);
    })
}

export const saveComponents = (components: any) => {
  return axios.post('/components', components)
    .then( response => {
      return response.data
    })
    .catch( error => {
      throw(error);
    })
}