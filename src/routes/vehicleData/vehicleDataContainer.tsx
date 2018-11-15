import { connect } from 'react-redux';
import { VehicleDataForm } from './vehicleData';
import { goToNextStep } from '../../actions/navigationStep';
import { saveVehicleData } from '../../actions/vehicleFormActions';
import { navigateToTyreForm } from '../../actions/navigationStep';

const mapStateToProps = (state) => {
  return {
    currentStep: state.navigationStep.currentStep,
    vehicleFormData: state.root.vehicleForm.vehicleData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(goToNextStep()),
    saveVehicleData: (vehicleFormData: any) => dispatch(saveVehicleData(vehicleFormData)),
    navigateToTyreForm: () => dispatch(navigateToTyreForm())
  }
}

export const VehicleDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDataForm);