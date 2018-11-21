import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from '../models/common';


export const vehicleForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_VEHICLE_DATA:
      return saveVehicleData(state, action);
    case actionsEnum.UPLOAD_VEHICLE_DATA:
      return {...state}
  }

  return state;
}

const saveVehicleData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.vehicleData
  }
}