import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from './models';

export const tyreForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.SAVE_TYRES_DATA:
      return saveTyreData(state, action);
  }

  return state;
}

const saveTyreData = (state: AppraisalState, action: any) => {
  return {
    ...state,
    ...action.payload.tyresData
  }
}

