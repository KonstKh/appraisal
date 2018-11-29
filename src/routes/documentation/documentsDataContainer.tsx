import { connect } from 'react-redux';
import { DocumentDataForm } from './documentsData';
import { navigateToComponentsForm } from '../../actions/navigationStep';
import { saveDocumentationData, uploadDocImage, updateDamageDocumentation } from '../../actions/vehicleFormActions';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep,
    documents: state.root.documentationForm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToComponentsForm: () => dispatch(navigateToComponentsForm()),
    saveDocumentationData: (docFormData: any) => dispatch(saveDocumentationData(docFormData)),
    uploadDocImage: (docImage: any, meta: any) => dispatch(uploadDocImage(docImage, meta)),
    updateDamageDocs: (damageProperty: any) => dispatch(updateDamageDocumentation(damageProperty))
  }
}

export const DocumentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(DocumentDataForm);