import { connect } from 'react-redux';
import { VehicleDataForm } from './vehicleData';
import { saveVehicleData, uploadVehicleData } from '../../actions/vehicleFormActions';
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
    navigateToTyresForm: () => dispatch(navigateToTyresForm()),
    updateVehicleData: (vehicleData: any) => dispatch(uploadVehicleData(vehicleData)) 
  }
}

export const VehicleDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDataForm);