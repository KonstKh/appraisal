import { connect } from 'react-redux';
import { InspectionDataComponent } from './inspectionData';
import { updateAppraisalStep, goToNextStep, goToPrevState } from '../../actions/appraisalStep';

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
)(InspectionDataComponent);