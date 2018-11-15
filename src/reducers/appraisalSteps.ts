import { actionsEnum } from '../actions/actionsEnum';

export interface NavigationStepState {
  currentStep: number;
}

const defaultNavigationStep : () => NavigationStepState = () => ({
  currentStep: 0
});

export const navigationStep = (state = defaultNavigationStep(), action) => {

  switch(action.type) {
    case actionsEnum.GO_TO_NEXT_STEP:
      return handleGoToNextStep(state, action);
    case actionsEnum.GO_TO_PREV_STEP:
      return handleGoToPrevStep(state, action);
  }

  return state;
}

const handleGoToNextStep = (state: NavigationStepState, action) => {
  return {
    ...state,
    currentStep: state.currentStep + 1
  }
}

const handleGoToPrevStep = (state: NavigationStepState, action) => {
  return {
    ...state,
    currentStep: state.currentStep - 1
  }
}
