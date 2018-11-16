import { connect } from 'react-redux';
import { DocumentsDataComponent } from './documentsData';
import { navigateToComponentsForm } from '../../actions/navigationStep';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToComponentsForm: () => dispatch(navigateToComponentsForm())
  }
}

export const DocumentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(DocumentsDataComponent);