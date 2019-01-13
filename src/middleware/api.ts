import 'isomorphic-fetch';
import Vehicle from '../models/vehicle';
import Tyres from '../models/tyres';
import Equipment from '../models/equipment';
import Inspection from '../models/inspection';
import Components from '../models/components';
import { DamageDocumentation } from '../models/documents';

const config = require('config');

// const apiUrl = 'http://5bf3e5a691c25b0013a3b967.mockapi.io/api/v1';

const API_ROOT = `${config.services.backend.api}admin/appraisal`;

const options = {
  method: 'PUT',
  mode: 'cors',
  body: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  }
}

export const saveVehicle = (vehicle: Vehicle, dealId: String) => {
  options.body = JSON.stringify(vehicle);

  return fetch(`${API_ROOT}/vehicle/${dealId}`, options as RequestInit)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    });
}

export const saveTyres = (tyres: Tyres, dealId: String) => {
  options.body = JSON.stringify(tyres);

  return fetch(`${API_ROOT}/tyres/${dealId}`, options as RequestInit)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
}

export const saveEquipment = (equipment: Equipment, dealId: String) => {
  options.body = JSON.stringify(equipment);

  return fetch(`${API_ROOT}/equipment/${dealId}`, options as RequestInit)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
}

export const saveInspection = (inspection: Inspection, dealId: String) => {
  options.body = JSON.stringify(inspection);

  return fetch(`${API_ROOT}/inspection/${dealId}`, options as RequestInit)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
}

export const saveComponents = (components: Components, dealId: String) => {
  options.body = JSON.stringify(components);

  return fetch(`${API_ROOT}/components/${dealId}`, options as RequestInit)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
}

export const saveDocumentation = (documentation: DamageDocumentation[], dealId: String) => {
  options.body = JSON.stringify(documentation);

  return fetch(`${API_ROOT}/documents/${dealId}`, options as RequestInit)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
}
