import { connect } from 'react-redux';
import { InspectionDataForm } from './inspectionData';
import { goToNextStep, goToPrevState } from '../../actions/navigationStep';

const mapStateToProps = (state)  => {
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

export const InspectionDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(InspectionDataForm);