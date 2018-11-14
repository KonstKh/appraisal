import { connect } from 'react-redux';
import { ComponentsDataForm } from './componentsData';
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

export const ComponentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(ComponentsDataForm);