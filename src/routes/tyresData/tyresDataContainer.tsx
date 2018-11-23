import { connect } from 'react-redux';
import { TyresDataForm } from './tyresData';
import { saveTyresData, uploadTyresData } from '../../actions/vehicleFormActions';
import { navigateToEquipmentForm, navigateToVehicleForm } from '../../actions/navigationStep';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep,
    tyres: state.root.tyresForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTyresData: (tyresFormData: any) => dispatch(saveTyresData(tyresFormData)),
    uploadTyresData: (tyresFormData: any) => dispatch(uploadTyresData(tyresFormData)),
    navigateToEquipmentForm: () => dispatch(navigateToEquipmentForm()),
    navigateToVehicleForm: () => dispatch(navigateToVehicleForm())
  }
}

export const TyresDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(TyresDataForm);