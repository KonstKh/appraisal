import Axios from 'axios';

// const apiUrl = 'http://5bf3e5a691c25b0013a3b967.mockapi.io/api/v1';
const apiUrl = 'http://127.0.0.1:9000/admin/appraisal';

const axios = Axios.create({
  baseURL: apiUrl
})

export const saveVehicle = (vehicle: any) => {
  return axios.put('/vehicle', vehicle)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw (error);
    });
}

export const saveTyres = (tyres: any) => {
  return axios.put('/tyres', tyres)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw (error);
    })
}

export const saveEquipment = (equipment: any) => {
  return axios.put('/equipment', equipment)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw (error);
    })
}

export const saveInspection = (inspection: any) => {
  return axios.put('/inspection', inspection)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw (error);
    })
}

export const saveComponents = (components: any) => {
  return axios.put('/components', components)
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw (error);
    })
}

export const saveImage = (image: any, meta) => {

  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: image
  }

  // const formData = new FormData();
  // formData.append('meta', meta);
  // formData.append('appraisalImage', image);
  // const config = {
  //   headers: {
  //     'content-type': 'multipart/form-data'
  //   },
  //   mode: 'cors'  
  // };

  return fetch('/appraisalImage', config as RequestInit)
    .then(response => {
      return response.formData
    })
    .catch(error => {
      throw( error );
    })
  // return axios.post('/appraisalImage', image)
  //   .then(response => {
  //     debugger;
  //     return response.data
  //   })
  //   .catch(error => {
  //     throw (error)
  //   })
}