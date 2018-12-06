import { connect } from 'react-redux';
import { ComponentsDataForm } from './componentsData';
import { navigateToInspectionForm, navigateToDocumentsForm } from '../../actions/navigationStep';
import { saveComponentsFormData, uploadComponentData } from '../../actions/vehicleFormActions';
import Components from '../../models/components';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep,
    components: state.root.componentsForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToInspectionForm: () => dispatch(navigateToInspectionForm()),
    navigateToDocumentsForm: () => dispatch(navigateToDocumentsForm()),
    saveComponentsFormData: (formData: Components ) => dispatch(saveComponentsFormData(formData)),
    uploadComponentData: (formData: Components) => dispatch(uploadComponentData(formData))
  }
}

export const ComponentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(ComponentsDataForm);