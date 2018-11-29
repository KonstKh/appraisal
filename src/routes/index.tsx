import * as React from 'react';
import { Route, Switch } from 'react-router';

import { VehicleDataContainer } from './vehicleData';
import { TyresDataContainer } from './tyresData';
import { EquipmentDataContainer } from './equipment';
import { ComponentsDataContainer } from './components';
import { InspectionDataContainer } from './inspection';
import { DocumentsDataContainer } from './documentation';

import { HeaderContainer } from '../components';
import { FooterComponent } from '../components';

const routes = (
  <React.Fragment>
    <header>
      <HeaderContainer userName="Max Mustermann" auto="Vokswagen - Arteon 2.0 TDI Elegance 4Motion" />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={DocumentsDataContainer} />
        <Route path="/tyres-data" component={TyresDataContainer} />
        <Route path="/equipment" component={EquipmentDataContainer} />
        <Route path="/inspection" component={InspectionDataContainer} />
        <Route path="/components" component={ComponentsDataContainer} />
        <Route path="/documentation" component={DocumentsDataContainer} />
      </Switch>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </ React.Fragment>
)

export default routes