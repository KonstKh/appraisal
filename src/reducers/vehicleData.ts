import { actionsEnum } from '../actions/actionsEnum';

export interface AppraisalState {
}

const defaultState : AppraisalState = {
}

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
