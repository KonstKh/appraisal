import { connect } from 'react-redux';
import { InspectionDataForm } from './inspectionData';
import { navigateToComponentsForm, navigateToEquipmentForm } from '../../actions/navigationStep';
import { saveInspectionFormData, uploadInspectionData } from '../../actions/vehicleFormActions';
import Inspection from '../../models/inspection';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep,
    inspection: state.root.inspectionForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveInspectionData: (formData: Inspection) => dispatch(saveInspectionFormData(formData)),
    uploadInspectionData: (formData: Inspection) => dispatch(uploadInspectionData(formData)),
    navigateToComponentsForm: () => dispatch(navigateToComponentsForm()),
    navigateToEquipmentForm: () => dispatch(navigateToEquipmentForm())
  }
}

export const InspectionDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionDataForm);