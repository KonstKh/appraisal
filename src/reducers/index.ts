import { combineReducers} from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { navigationStep, NavigationStepState } from './appraisalSteps';
import { vehicleForm } from './vehicleData';
import { tyreForm } from './tyreData';
import { navigation } from './navigation';

export interface State {
  navigationStep: NavigationStepState,
  router: RouterState
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  root: combineReducers({
    navigation,
    tyreForm,
    vehicleForm
  }),
  navigationStep
});

export default rootReducer;
