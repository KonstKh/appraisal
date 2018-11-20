import { actionsEnum } from '../actions/actionsEnum';
import { AppraisalState, defaultState } from './models';

export const documentationForm = (state: AppraisalState = defaultState, action) => {
  switch(action.type){
    case actionsEnum.SAVE_DOCUMENTATION_DATA:
      return saveDocsData(state, action);
    case actionsEnum.UPLOAD_DOC_IMAGE:
      return saveDocImageData(state, action);
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