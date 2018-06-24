import { connect } from 'react-redux';
import Login from '../components/login';
import { withRouter } from 'react-router-native';

mapStateToProps = (state) => {
  return {
      loginSuccess: state.setUser
  }
}

export default withRouter(connect(mapStateToProps)(Login));
