import { actionsEnum } from './actionEnum';

export const updateAppraisalStep = (currentStep: number) => ({
  type: actionsEnum.UPDATE_APPRAISAL_STEP,
  currentStep: currentStep
});

export const goToNextStep = () => ({
  type: actionsEnum.GO_TO_NEXT_STEP,
});

export const goToPrevState = () => ({
  type: actionsEnum.GO_TO_PREV_STEP,
})

