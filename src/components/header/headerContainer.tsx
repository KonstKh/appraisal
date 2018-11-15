import { connect } from 'react-redux';
import { HeaderComponent } from './header';

const mapStateToProps = (state) => {
  return {
    currentStep: state.root.navigation.navStep
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