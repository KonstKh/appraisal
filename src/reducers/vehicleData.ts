import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from './models';


export const vehicleForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_VEHICLE_DATA:
      return saveVehicleData(state, action);
  }

  return state;
}

const saveVehicleData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.vehicleData
  }
}
