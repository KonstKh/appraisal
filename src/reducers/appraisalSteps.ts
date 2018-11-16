import { actionsEnum } from '../actions/actionsEnum';

export interface NavigationStepState {
  currentStep: number;
}

const defaultNavigationStep : () => NavigationStepState = () => ({
  currentStep: 0
});

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
