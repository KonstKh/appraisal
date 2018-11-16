import { connect } from 'react-redux';
import { VehicleDataForm } from './vehicleData';
import { saveVehicleData } from '../../actions/vehicleFormActions';
import { navigateToTyresForm } from '../../actions/navigationStep';

const mapStateToProps = (state) => {
  return {
    currentStep: state.root.navigation.navStep,
    vehicleFormData: state.root.vehicleForm.vehicleData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveVehicleData: (vehicleFormData: any) => dispatch(saveVehicleData(vehicleFormData)),
    navigateToTyresForm: () => dispatch(navigateToTyresForm())
  }
}

export const VehicleDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDataForm);