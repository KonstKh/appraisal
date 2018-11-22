import { connect } from 'react-redux';
import { ComponentsDataForm } from './componentsData';
import { navigateToInspectionForm, navigateToDocumentsForm } from '../../actions/navigationStep';
import { saveComponentsFormData, uploadComponentData } from '../../actions/vehicleFormActions';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToInspectionForm: () => dispatch(navigateToInspectionForm()),
    navigateToDocumentsForm: () => dispatch(navigateToDocumentsForm()),
    saveComponentsFormData: (formData: any ) => dispatch(saveComponentsFormData(formData)),
    uploadComponentData: (formData: any) => dispatch(uploadComponentData(formData))
  }
}

export const ComponentsDataContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(ComponentsDataForm);