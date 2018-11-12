import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore} from 'react-router-redux'
import { configureStore } from './configureStore';

import { App } from './app';
import { VehicleDataContainer } from './pages/vehicleData';
import { TyresDataContainer} from './pages/tyresData';
import { EquipmentDataContainer } from './pages/equipment';
import { ComponentsDataContainer } from './pages/components';
import { InspectionDataContainer } from './pages/inspection';
import { DocumentsDataContainer } from './pages/documentation';


const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const render = () => {

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={VehicleDataContainer} />
          <Route path="vehicle-data" component={VehicleDataContainer} />
          <Route path="tyres-data" component={TyresDataContainer} />
          <Route path="equipment" component={EquipmentDataContainer} />
          <Route path="inspection" component={InspectionDataContainer} />
          <Route path="components" component={ComponentsDataContainer} />
          <Route path="documentation" component={DocumentsDataContainer} />
        </Route>
      </Router>
  </Provider>
  ,document.getElementById('root')
)
}

// if (module.hot) {
//   module.hot.accept('./routing/AppRouter', render);
// }

render();