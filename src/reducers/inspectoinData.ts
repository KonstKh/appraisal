import { actionsEnum } from '../actions/actionsEnum';

export interface AppraisalState {
}

const defaultState : AppraisalState = {
}

export const inspectionForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_INSPECTION_DATA:
      return saveInspectionData(state, action);
  }

  return state;
}

const saveInspectionData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.inspectionData
  }
}
