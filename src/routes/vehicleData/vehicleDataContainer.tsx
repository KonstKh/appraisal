import { connect } from 'react-redux';
import { VehicleDataForm } from './vehicleData';
import { goToNextStep } from '../../actions/appraisalStep';

const mapStateToProps = (state) => {
  return {
    currentStep: state.appraisalStepReducer.currentStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(goToNextStep()),
  }
}

export const VehicleDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleDataForm);