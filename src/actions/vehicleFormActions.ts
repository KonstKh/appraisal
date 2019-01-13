import { actionsEnum } from './actionsEnum';
import * as api from '../middleware/api';
import Vehicle from '../models/vehicle'
import Tyres from '../models/tyres';
import Equipement from '../models/equipment';
import Inspection from '../models/inspection';
import Components from '../models/components';
import { DamageDocumentation } from '../models/documents';

export const saveVehicleData = (vehicleFormData: Vehicle) => ({
  type: actionsEnum.SAVE_VEHICLE_DATA,
  payload: {
    vehicleData: vehicleFormData
  }
});

export const uploadVehicleData = (vehicleData: Vehicle, dealId: String) => {
  return (dispatch) => {
    return api.saveVehicle(vehicleData, dealId)
      .then(response => {
        dispatch(updateVehicleSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateVehicleSuccess = (updatedVehicle) => {
  return { type: actionsEnum.UPLOAD_VEHICLE_DATA, updatedVehicle }
}

export const saveTyresData = (tyresFormData: Tyres) => ({
  type: actionsEnum.SAVE_TYRES_DATA,
  payload: {
    tyresData: tyresFormData
  }
})

export const uploadTyresData = (tyresData: Tyres, dealId: String) => {
  return (dispatch) => {
    return api.saveTyres(tyresData, dealId)
      .then(response => {
        dispatch(updateTyresSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateTyresSuccess = (updatedTyres) => {
  return { type: actionsEnum.UPLOAD_TYRES_DATA, updatedTyres }
}

export const saveEquipmentData = (equipmentFormData: Equipement) => ({
  type: actionsEnum.SAVE_EQUIPMENT_DATA,
  payload: {
    equipmentData: equipmentFormData
  }
})

export const uploadEquipmentData = (equipmentData: Equipement, dealId: String) => {
  return (dispatch) => {
    return api.saveEquipment(equipmentData, dealId)
      .then(response => {
        dispatch(updateEquipmentSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateEquipmentSuccess = (updatedEquipment) => {
  return { type: actionsEnum.UPLOAD_EQUIPMENT_DATA, updatedEquipment }
}

export const saveInspectionFormData = (inspectionFormData: Inspection) => ({
  type: actionsEnum.SAVE_INSPECTION_DATA,
  payload: {
    inspectionData: inspectionFormData
  }
})

export const uploadInspectionData = (inspectionData: Inspection, dealId: String) => {
  return (dispatch) => {
    return api.saveInspection(inspectionData, dealId)
      .then(response => {
        dispatch(updateInspectionSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateInspectionSuccess = (updatedInspection) => {
  return { type: actionsEnum.UPLOAD_INSPECTION_DATA, updatedInspection }
}

export const saveComponentsFormData = (componentsFormData: Components) => ({
  type: actionsEnum.SAVE_COMPONENTS_DATA,
  payload: {
    componentsData: componentsFormData
  }
})

export const uploadComponentData = (componentData: Components, dealId: String) => {
  return (dispatch) => {
    return api.saveComponents(componentData, dealId)
      .then(response => {
        dispatch(updateComponentsSuccess(response));
      })
      .catch(error => { throw (error) });
  }
}

export const updateComponentsSuccess = (updatedComponents) => {
  return { type: actionsEnum.UPLOAD_COMPONENTS_DATA, updatedComponents }
}

export const uploadDocumentationData = (docFormData: DamageDocumentation[], dealId: String) => {
  return(dispatch) => {
    return api.saveDocumentation(docFormData, dealId)
      .then(response => {
        dispatch(updateDocumantationSuccess(response));
      })
      .catch(error => { throw (error)});
  }
}

const updateDocumantationSuccess = (updatedDocuments) => {
  return { type: actionsEnum.UPLOAD_DOCUMENTATION_DATA, updatedDocuments}
}

export const saveDocumentationData = (updatedDocs: DamageDocumentation[]) => ({
  type: actionsEnum.SAVE_DOCUMENTATION_DATA, 
  payload: {
    damageData: updatedDocs
  }
})
