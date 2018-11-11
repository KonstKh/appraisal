import { connect } from 'react-redux';
import { DocumentsDataComponent } from './documentsData';
import { updateAppraisalStep, goToPrevState } from '../../actions/appraisalStep';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.appraisalStepReducer.currentStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    previousStep: () => dispatch(goToPrevState())
  }
}

export const DocumentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(DocumentsDataComponent);