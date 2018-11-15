import { connect } from 'react-redux';
import { TyresDataForm } from './tyresData';
import { goToNextStep, goToPrevState } from '../../actions/navigationStep';
import { saveTyresData } from '../../actions/vehicleFormActions';
import { navigateToEquipmentForm } from '../../actions/navigationStep';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.navigationStep.currentStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(goToNextStep()),
    previousStep: () => dispatch(goToPrevState()),
    saveTyresData: (tyresFormData: any) => dispatch(saveTyresData(tyresFormData)),
    navigateToEquipmentForm: () => dispatch(navigateToEquipmentForm())
  }
}

export const TyresDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(TyresDataForm);