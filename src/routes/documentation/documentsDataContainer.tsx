import { connect } from 'react-redux';
import { DocumentDataForm } from './documentsData';
import { navigateToComponentsForm } from '../../actions/navigationStep';
import { saveDocumentationData, uploadDocumentationData } from '../../actions/vehicleFormActions';
import { DamageDocumentation } from '../../models/documents';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep,
    documents: state.root.documentationForm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToComponentsForm: () => dispatch(navigateToComponentsForm()),
    saveDocumentationData: (docFormData: DamageDocumentation[]) => dispatch(saveDocumentationData(docFormData)),
    uploadDamageDocs: (damageProperty: DamageDocumentation[], dealId: String) => dispatch(uploadDocumentationData(damageProperty, dealId))
  }
}

export const DocumentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(DocumentDataForm);