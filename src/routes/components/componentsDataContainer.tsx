import { connect } from 'react-redux';
import { ComponentsDataForm } from './componentsData';
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

export const ComponentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(ComponentsDataForm);