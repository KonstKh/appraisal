import { connect } from 'react-redux';
import { HeaderComponent } from './header';

const mapStateToProps = (state) => {
  return {
    // userName: state.userProfileReducer.firstname,
    // auto: state.auto.name,
    currentStep: state.appraisalStepReducer.currentStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);