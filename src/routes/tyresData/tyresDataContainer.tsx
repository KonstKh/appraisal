import { connect } from 'react-redux';
import { TyresDataComponent } from './tyresData';
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

export const TyresDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(TyresDataComponent);