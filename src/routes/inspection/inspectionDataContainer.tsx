import { connect } from 'react-redux';
import { InspectionDataForm } from './inspectionData';
import { goToNextStep, goToPrevState } from '../../actions/appraisalStep';

const mapStateToProps = (state)  => {
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

export const InspectionDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(InspectionDataForm);