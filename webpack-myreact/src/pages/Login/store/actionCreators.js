import axios from 'axios';

import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANG_LOGIN,
  value: true,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get(`/api/login.json?account=${account}&password=${password}`)
      .then(() => {
        dispatch(changeLogin());
      });
  };
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false,
});
