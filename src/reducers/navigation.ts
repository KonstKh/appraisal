import { actionsEnum } from '../actions/actionsEnum';

export interface AppraisalState {

}

const defaultState : AppraisalState = {
}

export const navigation = (state: AppraisalState = defaultState, action) => {
  switch(action.type) {
    case actionsEnum.GO_TO_VEHICLE_FORM:
      return { ...state, navStep: 0}
    case actionsEnum.GO_TO_TYRES_FORM:
      return { ...state, navStep: 1 }
    case actionsEnum.GO_TO_EQUIPMENT_FORM:
      return { ...state, navStep: 2 }
    case actionsEnum.GO_TO_INSPECTION_FORM:
      return { ...state, navStep: 3 }
    case actionsEnum.GO_TO_COMPONENTS_FORM:
      return { ...state, navStep: 4 }
    case actionsEnum.GO_TO_DOCUMENTS_FORM:
      return { ...state, navStep: 5 }
    case '@@router/LOCATION_CHANGE':
      if(action.payload.action === 'POP'){
        switch(action.payload.location.pathname) {
          case '/':
            return { ...state, navStep: 0 }
          case '/tyres-data':
            return { ...state, navStep: 1 }
          case '/equipment/':
            return { ...state, navStep: 2 }
          case '/inspection':
            return { ...state, navStep: 3 }
          case '/components':
            return { ...state, navStep: 4 }
          case '/documents':
            return { ...state, navStep: 5 }
        }
      }
  }
  return state;
}
