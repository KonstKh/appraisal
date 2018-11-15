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
