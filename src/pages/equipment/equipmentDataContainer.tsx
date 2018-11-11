import { connect } from 'react-redux';
import { EquipmentDataComponent } from './equipmentData';
import { updateAppraisalStep, goToNextStep, goToPrevState } from '../../actions/appraisalStep';

const mapStateToProps = (state) => {
  return {
    currentStep: state.appraisalStepReducer.currentStep
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
)(EquipmentDataComponent);