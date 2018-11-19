import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from './models';


export const equipmentForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_EQUIPMENT_DATA:
      return saveEquipmentData(state, action);
  }

  return state;
}

const saveEquipmentData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.equipmentData
  }
}