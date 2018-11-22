import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from '../models/common';

export const tyresForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_TYRES_DATA:
      return saveTyresData(state, action);
    case actionsEnum.UPLOAD_TYRES_DATA:
      return state;
  }

  return state;
}

const saveTyresData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.tyresData
  }
}
