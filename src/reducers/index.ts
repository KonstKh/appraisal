import { combineReducers} from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { appraisalStepReducer, AppraisalStepState } from './appraisalSteps';

export interface State {
  appraisalStepReducer: AppraisalStepState,
  router: RouterState
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  appraisalStepReducer
});

export default rootReducer;
