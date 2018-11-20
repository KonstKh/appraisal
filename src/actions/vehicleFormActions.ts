import { actionsEnum } from './actionsEnum';

export const saveVehicleData = (vehicleFormData: any) => ({
  type: actionsEnum.SAVE_VEHICLE_DATA,
  payload: {
    vehicleData: vehicleFormData
  }
});

export const saveTyresData = (tyresFormData: any) => ({
  type: actionsEnum.SAVE_TYRES_DATA,
  payload: {
    tyresData: tyresFormData
  }
})

export const saveEquipmentData = (equipmentFormData: any) => ({
  type: actionsEnum.SAVE_EQUIPMENT_DATA,
  payload: {
    equipmentData: equipmentFormData
  }
})

export const saveInspectionFormData = (inspectionFormData: any) => ({
  type: actionsEnum.SAVE_INSPECTION_DATA,
  payload: {
    inspectionData: inspectionFormData
  }
})

export const saveComponentsFormData = (componentsFormData: any) => ({
  type: actionsEnum.SAVE_COMPONENTS_DATA,
  payload: {
    componentsData: componentsFormData
  }
})

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

