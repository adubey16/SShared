import React from 'react';

import { connect } from 'react-redux';
import LoginPage from './LoginPage.jsx';

import { UserLoginAction } from '../../actions/UserLoginAction.jsx';
class Login extends React.Component {
   render() {
     const {UserLoginAction} = this.props;
     return (
        <div>
        <LoginPage UserLoginAction= { UserLoginAction} />
        </div>
      )
   }
}
Login.propTypes = {
  UserLoginAction : React.PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
});
export default connect(null, {UserLoginAction})(Login);



