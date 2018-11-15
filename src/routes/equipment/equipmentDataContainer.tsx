import { connect } from 'react-redux';
import { EquipementDataForm } from './equipmentData';
import { goToNextStep, goToPrevState } from '../../actions/navigationStep';

const mapStateToProps = (state) => {
  return {
    currentStep: state.navigationStep.currentStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(goToNextStep()),
    previousStep: () => dispatch(goToPrevState())
  }
}

export const EquipmentDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipementDataForm);