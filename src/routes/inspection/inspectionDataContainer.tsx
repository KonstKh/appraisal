import { connect } from 'react-redux';
import { InspectionDataForm } from './inspectionData';
import { navigateToComponentsForm, navigateToEquipmentForm } from '../../actions/navigationStep';
import { saveInspectionFormData } from '../../actions/vehicleFormActions';

const mapStateToProps = (state)  => {
  return {
    currentStep: state.root.navigation.navStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveInspectionData: (formData: any) => dispatch(saveInspectionFormData(formData)),
    navigateToComponentsForm: () => dispatch(navigateToComponentsForm()),
    navigateToEquipmentForm: () => dispatch(navigateToEquipmentForm())
  }
}

export const InspectionDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionDataForm);