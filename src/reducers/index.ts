import { combineReducers} from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { NavigationStepState } from '../models/common';
import { navigation } from './navigation';
import { vehicleForm } from './vehicleData';
import { tyresForm } from './tyresData';
import { equipmentForm } from './equipmentData';
import { inspectionForm } from './inspectoinData';
import { componentsForm } from './componentsData';
import { documentationForm } from './documentsData';

export interface State {
  navigationStep: NavigationStepState,
  router: RouterState
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  root: combineReducers({
    navigation,
    vehicleForm,
    tyresForm,
    equipmentForm,
    inspectionForm,
    componentsForm,
    documentationForm
  })
});

export default rootReducer;
