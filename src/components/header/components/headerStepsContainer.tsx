import { connect } from 'react-redux';
import { HeaderStepsComponent } from './headerSteps';



const mapStateToProps = (state) => {
  return {
    // loginInfo: state.sessionReducer.editingLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // updateLoginInfo: (loginInfo: LoginEntity) => dispatch(updateEditingLogin(loginInfo)),
    // performLogin: (loginInfo: LoginEntity) => dispatch(loginRequestStartedAction(loginInfo))
  }
}

export const HeaderStepsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderStepsComponent);