import { actionsEnum } from '../actions/actionsEnum';

export interface AppraisalState {

}

const defaultState : AppraisalState = {
}

export const navigation = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.GO_TO_TYRES_FORM:
      return { ...state, navStep: 1 }
    case actionsEnum.GO_TO_EQUIPMENT_FORM:
      return { ...state, navStep: 2 }
  }
  return state;
}
