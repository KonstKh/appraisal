import 'isomorphic-fetch';
import Vehicle from '../models/vehicle';
import Tyres from '../models/tyres';
import Equipment from '../models/equipment';
import Inspection from '../models/inspection';
import Components from '../models/components';


// const apiUrl = 'http://5bf3e5a691c25b0013a3b967.mockapi.io/api/v1';

// todo: extract to configuration
const API_ROOT = 'http://127.0.0.1:9000/admin/appraisal'

const options = {
  method: 'PUT',
  mode: 'cors',
  body: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  }
}

export const saveVehicle = (vehicle: Vehicle) => {
  options.body = JSON.stringify(vehicle);

  return fetch(`${API_ROOT}/vehicle`, options as RequestInit )
    .then(response => {
      return response.formData;
    })
    .catch(error => {
      throw (error);
    });
}

export const saveTyres = (tyres: Tyres) => {
  options.body = JSON.stringify(tyres);

  return fetch(`${API_ROOT}/tyres`, options as RequestInit )
    .then(response => {
      return response.formData
    })
    .catch(error => {
      throw (error);
    })
}

export const saveEquipment = (equipment: Equipment) => {
  options.body = JSON.stringify(equipment);

  return fetch(`${API_ROOT}/equipment`, options as RequestInit)
    .then(response => {
      return response.formData
    })
    .catch(error => {
      throw (error);
    })
}

export const saveInspection = (inspection: Inspection) => {
  options.body = JSON.stringify(inspection);

  return fetch(`${API_ROOT}/inspection`, options as RequestInit)
    .then(response => {
      return response.formData
    })
    .catch(error => {
      throw (error);
    })
}

export const saveComponents = (components: Components) => {
  options.body = JSON.stringify(components);

  return fetch(`${API_ROOT}/components`, options as RequestInit)
    .then(response => {
      return response.formData
    })
    .catch(error => {
      throw (error);
    })
}

// TODO: remove it
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

  return fetch(`${API_ROOT}/components`, config as RequestInit)
    .then(response => {
      return response.formData
    })
    .catch(error => {
      throw( error );
    })
}
