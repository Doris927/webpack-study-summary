import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';

import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    const { login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="user name"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="password"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button onClick={() => login(this.account, this.password)}>
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  loginStatus: state.getIn(['login', 'login']),
});

const mapDispatchToProps = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
