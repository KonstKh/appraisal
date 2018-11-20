import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from '../models/common';


export const componentsForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_COMPONENTS_DATA:
      return saveComponentsData(state, action);
  }

  return state;
}

const saveComponentsData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.componentsData
  }
}
