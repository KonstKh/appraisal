import { actionsEnum } from './actionsEnum';

export const navigateToVehicleForm = () => ({
  type: actionsEnum.GO_TO_VEHICLE_FORM
})

export const navigateToTyresForm = () => ({
  type: actionsEnum.GO_TO_TYRES_FORM
})

export const navigateToEquipmentForm = () => ({
  type: actionsEnum.GO_TO_EQUIPMENT_FORM
})

export const navigateToInspectionForm = () => ({
  type: actionsEnum.GO_TO_INSPECTION_FORM
})

export const navigateToComponentsForm = () => ({
  type: actionsEnum.GO_TO_COMPONENTS_FORM
})

export const navigateToDocumentsForm = () => ({
  type: actionsEnum.GO_TO_DOCUMENTS_FORM
})