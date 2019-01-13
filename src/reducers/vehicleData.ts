import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from '../models/common';
import Vehicle from '../models/vehicle';


export const vehicleForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_VEHICLE_DATA:
      return saveVehicleData(state, action);
    case actionsEnum.UPLOAD_VEHICLE_DATA:
      return uploadVehicleData(state, action);
  }

  return state;
}

const uploadVehicleData = (state: any, action: any) => {
  return state;
}

const saveVehicleData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.vehicleData
  }
}
