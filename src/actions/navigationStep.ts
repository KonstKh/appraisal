import { actionsEnum } from './actionsEnum';

export const goToNextStep = () => ({
  type: actionsEnum.GO_TO_NEXT_STEP,
});

export const goToPrevState = () => ({
  type: actionsEnum.GO_TO_PREV_STEP,
})

export const navigateToTyreForm = () => ({
  type: actionsEnum.GO_TO_TYRES_FORM
})

export const navigateToEquipmentForm = () => ({
  type: actionsEnum.GO_TO_EQUIPMENT_FORM
})