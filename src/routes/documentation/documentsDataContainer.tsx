import { connect } from 'react-redux';
import { DocumentsDataComponent } from './documentsData';
import { navigateToComponentsForm } from '../../actions/navigationStep';
import { saveDocumentationData, uploadDocImage } from '../../actions/vehicleFormActions';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToComponentsForm: () => dispatch(navigateToComponentsForm()),
    saveDocumentationData: (docFormData: any) => dispatch(saveDocumentationData(docFormData)),
    uploadDocImage: (docImage: any) => dispatch(uploadDocImage(docImage))
  }
}

export const DocumentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(DocumentsDataComponent);