import { connect } from 'react-redux';
import { EquipementDataForm } from './equipmentData';
import { saveEquipmentData, uploadEquipmentData } from '../../actions/vehicleFormActions';
import { navigateToTyresForm ,navigateToInspectionForm} from '../../actions/navigationStep'

const mapStateToProps = (state) => {
  return {
    currentStep: state.root.navigation.navStep,
    equipment: state.root.equipmentForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveEquipmentData: (formData: any) => dispatch(saveEquipmentData(formData)),
    uploadEquipmentData: (formData: any) => dispatch(uploadEquipmentData(formData)),
    navigateToInspectionForm: () => dispatch(navigateToInspectionForm()),
    navigateToTyresForm: () => dispatch(navigateToTyresForm())
  }
}

export const EquipmentDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipementDataForm);