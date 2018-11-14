import { actionsEnum } from '../actions/actionEnum';

export interface AppraisalStepState {
  currentStep: number;
}

const defaultAppraisalStep : () => AppraisalStepState = () => ({
  currentStep: 0
});


export const appraisalStepReducer = (state = defaultAppraisalStep(), action) => {

  switch(action.type) {
    case actionsEnum.GO_TO_NEXT_STEP:
      return handleGoToNextStep(state, action);
    case actionsEnum.GO_TO_PREV_STEP:
      return handleGoToPrevStep(state, action);
  }

  return state;
}

const handleGoToNextStep = (state: AppraisalStepState, action) => {
  return {
    ...state,
    currentStep: state.currentStep + 1
  }
}

const handleGoToPrevStep = (state: AppraisalStepState, action) => {
  return {
    ...state,
    currentStep: state.currentStep - 1
  }
}
