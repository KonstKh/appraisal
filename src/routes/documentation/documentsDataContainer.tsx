import { connect } from 'react-redux';
import { DocumentsDataComponent } from './documentsData';
import { goToPrevState } from '../../actions/navigationStep';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.navigationStep.currentStep
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