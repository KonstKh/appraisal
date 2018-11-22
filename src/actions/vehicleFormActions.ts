import { actionsEnum } from './actionsEnum';
import * as api from '../middleware/api';

export const saveVehicleData = (vehicleFormData: any) => ({
  type: actionsEnum.SAVE_VEHICLE_DATA,
  payload: {
    vehicleData: vehicleFormData
  }
});

export const uploadVehicleData = (vehicleData: any) => {
  return (dispatch) => {
    return api.saveVehicle(vehicleData)
      .then(response => {
        dispatch(updateVehicleSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateVehicleSuccess = (updatedVehicle) => {
  return { type: actionsEnum.UPLOAD_VEHICLE_DATA, updatedVehicle }
}

export const saveTyresData = (tyresFormData: any) => ({
  type: actionsEnum.SAVE_TYRES_DATA,
  payload: {
    tyresData: tyresFormData
  }
})

export const uploadTyresData = (tyresData: any) => {
  return (dispatch) => {
    return api.saveTyres(tyresData)
      .then(response => {
        dispatch(updateTyresSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateTyresSuccess = (updatedTyres) => {
  return { type: actionsEnum.UPLOAD_TYRES_DATA, updatedTyres }
}

export const saveEquipmentData = (equipmentFormData: any) => ({
  type: actionsEnum.SAVE_EQUIPMENT_DATA,
  payload: {
    equipmentData: equipmentFormData
  }
})

export const uploadEquipmentData = (equipmentData: any) => {
  return (dispatch) => {
    return api.saveEquipment(equipmentData)
      .then(response => {
        dispatch(updateEquipmentSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateEquipmentSuccess = (updatedEquipment) => {
  return { type: actionsEnum.UPLOAD_EQUIPMENT_DATA, updatedEquipment }
}

export const saveInspectionFormData = (inspectionFormData: any) => ({
  type: actionsEnum.SAVE_INSPECTION_DATA,
  payload: {
    inspectionData: inspectionFormData
  }
})

export const uploadInspectionData = (inspectionData: any) => {
  return (dispatch) => {
    return api.saveInspection(inspectionData)
      .then(response => {
        dispatch(updateInspectionSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateInspectionSuccess = (updatedInspection) => {
  return { type: actionsEnum.UPLOAD_INSPECTION_DATA, updatedInspection }
}

export const saveComponentsFormData = (componentsFormData: any) => ({
  type: actionsEnum.SAVE_COMPONENTS_DATA,
  payload: {
    componentsData: componentsFormData
  }
})

export const uploadComponentData = (componentData: any) => {
  return (dispatch) => {
    return api.saveComponents(componentData)
      .then(response => {
        dispatch(updateInspectionSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const uploadDocImage = (docImage: any) => ({
  type: actionsEnum.UPLOAD_DOC_IMAGE,
  payload: {
    image: docImage
  }
})

export const saveDocumentationData = (docFormData: any) => ({
  type: actionsEnum.SAVE_DOCUMENTATION_DATA,
  payload: {
    documentationData: docFormData
  }
})

