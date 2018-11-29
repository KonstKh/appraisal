import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from '../models/common';

export const documentationForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type){
    case actionsEnum.SAVE_DOCUMENTATION_DATA:
      return saveDocsData(state, action);
    case actionsEnum.UPLOAD_DOC_IMAGE:
      return saveDocImageData(state, action);
    case actionsEnum.UPDATE_DOCS_DATA: 
      return updateDamageDocumentation(state, action);
  }
  return state;
}

const saveDocsData = (state, action) => {
  return {
    ...state,
    ...action.payload.documentationData
  }
}

const saveDocImageData = (state, action) => {
  return {
    ...state,
    ...action.payload.docImage
  }
}

const updateDamageDocumentation = (state, action) => {
  return {
    ...state,
    ...action.payload.damageData
  }
}