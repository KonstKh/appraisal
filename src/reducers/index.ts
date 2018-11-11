import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { appraisalStepReducer, AppraisalStepState } from './appraisalSteps';

import { actionsEnum } from '../actions/actionEnum';

export interface State {
  appraisalStepReducer: AppraisalStepState
}

export const reducers = combineReducers({
  routing: routerReducer,
  appraisalStepReducer
})