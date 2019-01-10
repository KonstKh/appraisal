import { connect } from 'react-redux';
import { TyresDataForm } from './tyresData';
import { saveTyresData, uploadTyresData } from '../../actions/vehicleFormActions';
import { navigateToEquipmentForm, navigateToVehicleForm } from '../../actions/navigationStep';
import Tyres from '../../models/tyres';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep,
    tyres: state.root.tyresForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTyresData: (tyresFormData: Tyres) => dispatch(saveTyresData(tyresFormData)),
    uploadTyresData: (tyresFormData: Tyres, dealId: String) => dispatch(uploadTyresData(tyresFormData, dealId)),
    navigateToEquipmentForm: () => dispatch(navigateToEquipmentForm()),
    navigateToVehicleForm: () => dispatch(navigateToVehicleForm())
  }
}

export const TyresDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(TyresDataForm);