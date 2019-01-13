import { connect } from 'react-redux';
import { VehicleDataForm } from './vehicleData';
import { saveVehicleData, uploadVehicleData } from '../../actions/vehicleFormActions';
import { navigateToTyresForm } from '../../actions/navigationStep';

const mapStateToProps = (state) => {
  return {
    currentStep: state.root.navigation.navStep,
    vehicle: state.root.vehicleForm,
    url: state.router.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveVehicleData: (vehicleFormData: any) => dispatch(saveVehicleData(vehicleFormData)),
    navigateToTyresForm: () => dispatch(navigateToTyresForm()),
    uploadVehicleData: (vehicleData: any, dealId: String) => dispatch(uploadVehicleData(vehicleData, dealId)) 
  }
}

export const VehicleDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDataForm);